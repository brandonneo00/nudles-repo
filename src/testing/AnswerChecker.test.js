import AnswerChecker from "../components/AnswerChecker";

test("AnswerChecker", () => {
  const greenColor = "#6AAA64";
  const orangeColor = "#F7B556";
  const greyColor = "#787E7E";

  //mockData consist of sample test inputs
  var mockData = [
    ["TTTTTTT", "TRIVIAL"],
    ["TIIIIII", "TRIVIAL"],
    ["TIITTTT", "TRIVIAL"],
    ["1234567", "TRIVIAL"],
    ["RTVILIA", "TRIVIAL"],
    ["TRIVIAL", "TRIVIAL"],
    ["TRIVIA", "TRIVIAL"],
    ["TRIVI", "TRIVIAL"],
    ["VIAL", "TRIVIAL"],
    ["RIVIAL", "TRIVIAL"],
  ];

  //resultData is where we store the results of the
  //sample inputs from AnswerChecker function
  var resultData = [];

  //correctOutput refers to the expected output of AnswerChecker
  //after looping through all the mockData sample inputs
  var correctOutput = [
      [
        [greenColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"]
      ],
      [
        [greenColor, "T"],
        [orangeColor, "I"],
        [greenColor, "I"],
        [orangeColor, "I"],
        [greenColor, "I"],
        [orangeColor, "I"],
        [orangeColor, "I"]
      ],
      [
        [greenColor, "T"],
        [orangeColor, "I"],
        [greenColor, "I"],
        [orangeColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"],
        [orangeColor, "T"]
      ],
      [
        [greyColor, "1"],
        [greyColor, "2"],
        [greyColor, "3"],
        [greyColor, "4"],
        [greyColor, "5"],
        [greyColor, "6"],
        [greyColor, "7"]
      ],
      [
        [orangeColor, "R"],
        [orangeColor, "T"],
        [orangeColor, "V"],
        [orangeColor, "I"],
        [orangeColor, "L"],
        [orangeColor, "I"],
        [orangeColor, "A"]
      ],
      [
        [greenColor, "T"],
        [greenColor, "R"],
        [greenColor, "I"],
        [greenColor, "V"],
        [greenColor, "I"],
        [greenColor, "A"],
        [greenColor, "L"]
      ],
      [
        [greenColor, "T"],
        [greenColor, "R"],
        [greenColor, "I"],
        [greenColor, "V"],
        [greenColor, "I"],
        [greenColor, "A"]
      ],
      [
        [greenColor, "T"],
        [greenColor, "R"],
        [greenColor, "I"],
        [greenColor, "V"],
        [greenColor, "I"]
      ],
      [
        [orangeColor, "V"],
        [orangeColor, "I"],
        [orangeColor, "A"],
        [orangeColor, "L"]
      ],
      [
        [orangeColor, "R"],
        [orangeColor, "I"],
        [orangeColor, "V"],
        [orangeColor, "I"],
        [orangeColor, "A"],
        [orangeColor, "L"]
      ]
  ];

  //We loop through the mockData sample inputs and pluck them
  //into the AnswerChecker function, we then push the result into
  //the resultData array which is then compared against the
  //correctOutput array later on
  for (let i = 0; i < mockData.length; i++) {
    const userInput = mockData[i][0];
    const answerKey = mockData[i][1];
    const resultingArray = AnswerChecker(userInput, answerKey);
    resultData.push(resultingArray);
  }

  //assert the expected result
  expect(resultData).toMatchObject(correctOutput);
});
