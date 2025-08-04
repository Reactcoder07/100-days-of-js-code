function factorial(number)
{
if (number < 0) {
    console.log('Error');
}

// if number is 0
else if (number === 0) {
    return 1;
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact = fact * i;
    }
    return fact;
}

}

const result = factorial(0);

console.log(result)

//Using Recursive method

function factorial(num) {

    // if number is 0
    if (num == 0) {
        return 1;
    }

    // if number is positive
    else {
        return num * factorial(num - 1);
    }
}

const result1 = factorial(10);
console.log(result1)