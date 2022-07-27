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