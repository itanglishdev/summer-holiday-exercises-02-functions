// EX 1

function generateAnArray(lowestInt, highestInteger) {
    const newArray = [];
    let newValue = 0;
    for (i = 0; i <= (highestInteger - lowestInt); i++) {
        newValue = lowestInt + i;
        newArray.push(newValue);
    } return newArray;
}

console.log(generateAnArray(-4, 7));

//  EX 2

function generateASpecifiedLengthArray(firstInteger, secondInteger) {
    const newArray = [];
    let value = 0;
    for (let i = 0; i < secondInteger; i++) {
        value = firstInteger + i;
        newArray.push(value);
    } return newArray
}
console.log(generateASpecifiedLengthArray(-6, 4));

// EX 3

function switchPosition(currentPosition, newPosition) {
    const startingArray = [10, 20, 30, 40, 50];
    let firstElement = startingArray[currentPosition];
    let secondElement = startingArray[newPosition];
    const finalArray = [];
    startingArray.splice(currentPosition, 1, secondElement);
    startingArray.splice(newPosition, 1, firstElement);
    return startingArray;
}

console.log(switchPosition(1, 4));

// EX 4

function stringWillFill(someString, numberOfTimes) {
    const array = [];
    for (let i = 0; i < numberOfTimes; i++) {
        array.push(someString);
    } return array
}
console.log(stringWillFill("some string", 4));
