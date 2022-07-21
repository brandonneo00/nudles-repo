import { Text, Center, VStack, Box, HStack } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { db } from "./firebase/config";
import { collection, getDocs } from "firebase/firestore";
import React from "react";
import { useReactToPrint } from "react-to-print";
import "./CompiledQuestionsV2.css";

function CompiledQuestionsV2() {
  const [resultArray, setResultArray] = useState("");
  const [clicked, setClicked] = useState(false);
  var placeholder = [];
  const location = useLocation();
  const { obj } = location.state;

  const handleShow = async () => {
    setResultArray("");
    setClicked(false);
    const querySnapshot = await getDocs(
      collection(db, "modules", obj.modcode, obj.ay, obj.term, obj.creatoruid)
    );
    querySnapshot.forEach((doc) => {
      placeholder.push({
        question: doc.data().question,
        hint: doc.data().hint,
        answer: doc.data().answer,
        explanation: doc.data().explanation,
      });
    });
    setResultArray(placeholder);
    setClicked(true);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      {clicked ? (
        <>
          <div ref={componentRef}>
            <Box padding="5vw 6vw 1vw">
              <Text align="left" fontSize="18px" fontWeight="bold">
                Compiled Questions for {obj.modcode}
              </Text>
              <Text
                align="left"
                fontSize="16px"
                fontWeight="bold"
                textColor="#686B6F"
              >
                AY{obj.ay} {obj.term}
              </Text>
              <Text
                align="left"
                fontSize="10px"
                fontWeight="bold"
                textColor="#686B6F"
                marginBottom="8px"
              >
                Created By {obj.createdby}
              </Text>

              {resultArray &&
                resultArray.map((element, index) => (
                  <>
                    <Box
                      key={index}
                      borderColor="#000000"
                      margin="3vw 0"
                      className={(index + 1) % 5 === 0 ? "page-break" : ""}
                    >
                      <VStack spacing={0} align="left">
                        <Text fontSize="11px" fontWeight="bold">
                          {index + 1 + ") " + element.question}
                        </Text>
                        <HStack spacing="5px">
                          <Text fontSize="10px" fontWeight="bold">
                            Hint:{" "}
                          </Text>
                          <Text fontSize="10px">{element.hint}</Text>
                        </HStack>
                        <HStack spacing="5px">
                          <Text fontSize="10px" fontWeight="bold">
                            Answer:{" "}
                          </Text>
                          <Text fontSize="10px">{element.answer}</Text>
                        </HStack>
                        <HStack spacing="5px">
                          <Text fontSize="10px" fontWeight="bold">
                            Explanation:{" "}
                          </Text>
                          <Text fontSize="10px">{element.explanation}</Text>
                        </HStack>
                      </VStack>
                    </Box>

                    {(index + 1) % 5 === 0 && (
                      <>
                        <div className="notes">
                          <span></span>
                        </div>

                        {index !== resultArray.length - 1 && (
                          <div className="pagebreak"></div>
                        )}

                        {index !== resultArray.length - 1 && (
                          <div className="spacing"></div>
                        )}
                      </>
                    )}

                    {index === resultArray.length - 1 &&
                      (index + 1) % 5 !== 0 && <div className="notes"></div>}
                  </>
                ))}
            </Box>
          </div>
          <Box
            as="button"
            height="30px"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="0px"
            width="120px"
            borderRadius="10px"
            fontSize="14px"
            fontWeight="semibold"
            bg="#F7B556"
            borderColor=""
            color="#000000"
            _hover={{ bg: "#DBA14D" }}
            _active={{
              bg: "#F7B556",
              transform: "scale(0.98)",
              borderColor: "",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={handlePrint}
            margin="1vw 0vw 4vw"
            textAlign="middle"
            marginLeft="6vw"
          >
            Download
          </Box>
        </>
      ) : (
        <Center textAlign="center" minHeight="100vh">
          <Box
            as="button"
            height="6vw"
            lineHeight="1.2"
            transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
            border="0px"
            width="20vw"
            borderRadius="15px"
            fontSize="2vw"
            fontWeight="semibold"
            bg="#F7B556"
            borderColor=""
            color="#000000"
            _hover={{ bg: "#DBA14D" }}
            _active={{
              bg: "#F7B556",
              transform: "scale(0.98)",
              borderColor: "",
            }}
            _focus={{
              boxShadow:
                "0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
            }}
            onClick={handleShow}
          >
            Show Document
          </Box>
        </Center>
      )}
    </div>
  );
}
export default CompiledQuestionsV2;
