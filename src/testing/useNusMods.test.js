// import { useNusMods } from "../hooks/useNusMods";
import React from "react";
import { useState } from "react";

describe("Testing useNusMods Hook", () => {

    //Over here we created a copy of our useNusMods React Hook to use for testing,
    //we commented out the useStates because react useStates do not work well with jest testing
    //we do not require the useStates to fetch the modules name so we used the modified version
    //below for testing  
    function formatYear(acadyear) {
        return "20" + acadyear.substring(0, 3) + "20" + acadyear.substring(3);
    }

    
    const usingapi = async (ay, mc) => {
        var modName = null;
        // const [error1, setError1] = useState(null);
        // const [modExist, setModExist] = useState(true);
        const nusmodsAPI =
            "https://api.nusmods.com/v2/" +
            formatYear(ay) +
            "/modules/" +
            mc +
            ".json";

        await fetch(nusmodsAPI)
            .then((response) => response.json())
            .then((data) => {
                modName = data.title;
                // console.log(data + " this is data");
            })
            .catch((error) => {
                // setModExist(false);
                // setError1(`Module does not exist! Please click checkbox:)`);
            });

        // console.log("modname var inside usingapi is " + modName);
        return modName;
    };
    
    test("With valid existing modules", async () => {
        const mockData = [
            ["21-22", "MA2001"], 
            ["21-22", "MA200"], //incomplete modulecode
            ["21-22", "ABC1000"], //module does not exist
            ["91-92", "MA2001"], //year is too far ahead
            ["20-21", "MA2001"], //modulecode was different in the past 
            ["21-22", ""] //empty input for module code
        
        ]
        var result = [];
        var expectedOutcome = ["Linear Algebra I", null, null, null, null, null]


        
        for (let i = 0; i < mockData.length; i++){
            const modulename = await usingapi(mockData[i][0], mockData[i][1])
            result.push(modulename);
        }
        expect(result).toMatchObject(expectedOutcome);
    }, 30000);

})