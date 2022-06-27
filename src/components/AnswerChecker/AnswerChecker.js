function AnswerChecker(userInput, correctAns) {
  const inputLength = userInput.length;
  const greenColor = "#6AAA64";
  const orangeColor = "#F7B556";
  const greyColor = "#787E7E";
  
  var colorArray = [];

  for (let i = 0; i < inputLength; i++) {
    colorArray[i] = [];
    const userLetter = userInput.charAt(i);
    const ansLetter = correctAns.charAt(i);
    console.log(ansLetter);
    if (userLetter === ansLetter) {
      console.log("Green");
      colorArray[i].push(greenColor);
      colorArray[i].push(userLetter);
    } else {
      if (correctAns.includes(userLetter)) {
        console.log("Orange");
        colorArray[i].push(orangeColor);
        colorArray[i].push(userLetter);
      } else {
        console.log("Grey");
        colorArray[i].push(greyColor);
        colorArray[i].push(userLetter);
      }
    }
  }
  return colorArray;
}

export default AnswerChecker;
