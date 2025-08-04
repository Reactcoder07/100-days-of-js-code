function printFibonacciNumbers(num)
{
    let f1 = 0, f2 = 1, i;
 
    if (num < 1)
        return 0;
    console.log(f1 + " ");
    for (i = 1; i < num; i++) {
        console.log(f2);
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
}
printFibonacciNumbers(30)


function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// Example: Print the 10th number in the Fibonacci series
console.log(fibonacci(10));