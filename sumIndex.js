function sumArraysIndexWise(array11, array22) {
    // if (array11.length !== array22.length) {
    //     return "Length of both arrays should be the same";
    // }

    const result11 = [];
    for (let i = 0; i < array11.length; i++) {
        result11.push(array11[i] + array22[i]);
    }
    return result11;
}

// Example usage:
const array11 = [51, 16, 33, 2, 14, 21];
const array22 = [33, 9, 56, 21];
const sumResult1 = sumArraysIndexWise(array11, array22);
console.log("Resultant array is:", sumResult1);


function sumArraysDifferentIndex(array1, array2) {
    const maxLength = Math.max(array1.length, array2.length);
    const result = [];

    for (let i = 0; i < maxLength; i++) {
        const value1 = array1[i] !== undefined ? array1[i] : 0;
        const value2 = array2[i] !== undefined ? array2[i] : 0;
        result.push(value1 + value2);
    }

    return result;
}

// Example usage:
const array1 = [51, 16, 33, 2, 14, 21];
const array2 = [33, 9, 56, 21];
const sumResult = sumArraysDifferentIndex(array1, array2);
console.log("Resultant array is:", sumResult);



