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

// EX 5

function pickARandomNumber(array) {

    return array[Math.floor(Math.random() * array.length)];
}
console.log(pickARandomNumber([254, 45, 212, 365, 2543]));


// EX 6

function findASpecificNumber(array, specificElement) {
    if (array.includes(specificElement)) {
        return true
    } return false
}
console.log(findASpecificNumber([2, 5, 9, 6], 6));

// EX 7

function mergeTwoArrays(arrayOne, arrayTwo) {
    let newArray = []
    for (let i = 0; i < arrayOne.length; i++) {
        for (let j = 0; j < arrayTwo.length; j++) {
            if (arrayOne[i] === arrayTwo[j]) {
                arrayTwo.splice([j], 1)
            }
        }
        newArray = arrayOne.concat(arrayTwo)
    } return (newArray)
}
console.log(mergeTwoArrays([1, 2, 3,], [2, 30, 1]));

// EX 8

function remove(array) {
    //     for (let i = 0; i <= array.length; i++) {
    //         if (typeof array[i] === Boolean) {
    //             array.splice([i], 1)
    //         }
    //     }
    return array.filter(Boolean)
    //     return array
}
console.log(remove([NaN, 0, 15, false, -22, '', undefined, 47, null]));

