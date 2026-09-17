//function --> default parameter
function sumNumber(a, b, c = 10, d = 20) { //default parameter
    console.log(a + b + c + d)
}

sumNumber(10, 20, 30, 40) //call function with all parameters
sumNumber(11, 2, 35) //call function with 3 parameters, d will use default value
sumNumber(111, 25) //call function with 2 parameters, c and d will use default value