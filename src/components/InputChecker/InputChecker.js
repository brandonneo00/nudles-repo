function InputChecker(userInput, correctAns) {
    const inputLength = userInput.length;
    const greenColor = "#6AAA64";
    const orangeColor = "#F7B556";
    const greyColor = "#787E7E";

    var colorArray = [];

    //Dissect & group the correctAns in an orderly format
    //For e.g. answer is ADELE, we want to create an array in the form shown below
    //[[A, 1], [D, 1], [E, 2], [L, 1]]
    var dissectedAns = [];
    for (let i = 0; i < correctAns.length; i++) {
        const ansLetter = correctAns.charAt(i);
        var newLetter = true;
        for (let j = 0; j < dissectedAns.length; j++) {
            const letterInArray = dissectedAns[j][0];
            if (ansLetter === letterInArray) {
                newLetter = false;
                dissectedAns[j][1] = dissectedAns[j][1] + 1;
                break;
            }
        }

        if (newLetter) {
            dissectedAns.push([ansLetter, 1])
        }
    }

    //Editarray function checks the letter against the dissected array and decrement
    //the number beside each alphabet accordingly until it reaches 0
    const editArray = (letter, array) => {
        var deducted = false;
        for (let i = 0; i < array.length; i++) {
            const letterInArray = array[i][0];
            if (letter === letterInArray && array[i][1] > 0) {
                deducted = true;
                array[i][1] = array[i][1] - 1;
                break;
            }
        }

        dissectedAns = array;
        return deducted;
    }

    //We create a helper array of true and false to check for alphabets (green) in
    //correct position and letter.
    var helper = [];
    for (let i = 0; i < inputLength; i++) {
        const userLetter = userInput.charAt(i);
        const ansLetter = correctAns.charAt(i);
        if (userLetter === ansLetter) {
            helper.push(true);
            const outcome = editArray(userLetter, dissectedAns);
        } else {
            helper.push(false);
        }
    }

    for (let j = 0; j < inputLength; j++) {
        const Letter = userInput.charAt(j);
        if (helper[j] === true) {
            colorArray.push([Letter, greenColor]);
        } else {
            const outcome = editArray(Letter, dissectedAns);
            if (outcome) {
                colorArray.push([Letter, orangeColor]);
            } else {
                colorArray.push([Letter, greyColor]);
            }
        }
    }

    return colorArray;
}
export default InputChecker;