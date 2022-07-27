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