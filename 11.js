function isPrime(a) {
    var con = 0;
    for (var x = 1; x <= a; x++){
        if (a % x == 0) {
            con++
        }
    }
    if (con <= 2) {
        console.log("This Is Prime Number")
    }else {
        console.log("This Is Not A Prime Number");
        
    }
}

isPrime(7)