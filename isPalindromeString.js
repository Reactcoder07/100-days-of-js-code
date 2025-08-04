function checkPalindrome(string) {

    // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

//take input

const str = "Pradip"

checkPalindrome(str);

//

function checkPalindrome(x) {
    let convertedNumber = x.toString();
    let reverseString = convertedNumber.split("").reverse().join("");
    return reverseString === convertedNumber ? "Yes" : "No";
}