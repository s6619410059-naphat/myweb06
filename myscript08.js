//Expression function
//Anonymous function
let data1 = function () {    //no parameter no return value
    console.log("Hi...")
}

let data2 = function (x, y) {   //with parameter no return value
    console.log(x + y)
}

let data3 = function () {   //no parameter with return value
    return 'hello'
}

let data4 = function (x, y) {  //with parameter with return value
    return x + y 
}

//--------------------------
data1() //call function with no parameter
data2(10, 20) //call function with parameter
console.log(data3()) //call function with no parameter and return value
console.log(data4(100, 200)) //call function with parameter and return value ** have to use console.log() to print the return value
