//Expression function 
//arrow function
let data1 = () => {    //no parameter no return value
    console.log("Hi...")
}

let data2 = (x, y) => {   //with parameter no return value
    console.log(x + y)
}

let data3 = () => {   //no parameter with return value
    return 'hello'
}

let data4 = (x, y) => {  //with parameter with return value
    return x + y 
}

//--------------------------
data1() //call function with no parameter
data2(10, 20) //call function with parameter
console.log(data3()) //call function with no parameter and return value
console.log(data4(100, 200)) //call function with parameter and return value ** have to use console.log() to print the return value
