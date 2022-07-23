import InputChecker from "../components/InputChecker";

// Checking the InputChecker component for user-inputs

//test block
test("InputChecker", () => {
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
  //sample inputs from InputChecker function
  var resultData = [];

  //correctOutput refers to the expected output of InputChecker
  //after looping through all the mockData sample inputs
  var correctOutput = [
    [
      ["T", greenColor],
      ["T", greyColor],
      ["T", greyColor],
      ["T", greyColor],
      ["T", greyColor],
      ["T", greyColor],
      ["T", greyColor],
    ],
    [
      ["T", greenColor],
      ["I", greyColor],
      ["I", greenColor],
      ["I", greyColor],
      ["I", greenColor],
      ["I", greyColor],
      ["I", greyColor],
    ],
    [
      ["T", greenColor],
      ["I", orangeColor],
      ["I", greenColor],
      ["T", greyColor],
      ["T", greyColor],
      ["T", greyColor],
      ["T", greyColor],
    ],
    [
      ["1", greyColor],
      ["2", greyColor],
      ["3", greyColor],
      ["4", greyColor],
      ["5", greyColor],
      ["6", greyColor],
      ["7", greyColor],
    ],
    [
      ["R", orangeColor],
      ["T", orangeColor],
      ["V", orangeColor],
      ["I", orangeColor],
      ["L", orangeColor],
      ["I", orangeColor],
      ["A", orangeColor],
    ],
    [
      ["T", greenColor],
      ["R", greenColor],
      ["I", greenColor],
      ["V", greenColor],
      ["I", greenColor],
      ["A", greenColor],
      ["L", greenColor],
    ],
    [
      ["T", greenColor],
      ["R", greenColor],
      ["I", greenColor],
      ["V", greenColor],
      ["I", greenColor],
      ["A", greenColor],
    ],
    [
      ["T", greenColor],
      ["R", greenColor],
      ["I", greenColor],
      ["V", greenColor],
      ["I", greenColor],
    ],
    [
      ["V", orangeColor],
      ["I", orangeColor],
      ["A", orangeColor],
      ["L", orangeColor],
    ],
    [
      ["R", orangeColor],
      ["I", orangeColor],
      ["V", orangeColor],
      ["I", orangeColor],
      ["A", orangeColor],
      ["L", orangeColor],
    ],
  ];

  //We loop through the mockData sample inputs and pluck them
  //into the InputChecker function, we then push the result into
  //the resultData array which is then compared against the
  //correctOutput array later on
  for (let i = 0; i < mockData.length; i++) {
    const userInput = mockData[i][0];
    const answerKey = mockData[i][1];
    const resultingArray = InputChecker(userInput, answerKey);
    resultData.push(resultingArray);
  }

  //assert the expected result
  expect(resultData).toMatchObject(correctOutput);
});
