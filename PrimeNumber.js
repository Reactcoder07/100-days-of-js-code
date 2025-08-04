function isPrime(num) {
    if (num == 1 || num == 0)
    return false;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            return false;
        
        }
    }
    return true;
}


var n = 100;

for (i = 0; i<n; i++){
    if(isPrime(i)) {
        console.log( i );
      }
}