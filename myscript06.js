// function 
//no parameters no return value
function myFuncA() {
    console.log('Hello ')
    console.log('World')
}

//have parameters no return value
function myFuncB( a, b) {   //parameters is local variable, only can use inside function
    console.log(a + b)
}

//no parameters have return value
function myFuncC( ) {
    console.log('Hello')
    return 1234
}

//have parameters and return value
function myFuncD( fullname, age) {
    return `Hello, ${fullname} is ${age} years old.`
}

//---------------------------
//call function have return value
myFuncA()
myFuncB(10, 20) //data sent to parametor call argument

//call function have return value and use return value
console.log(myFuncC())
let data = myFuncD("Alice", 25) //data sent to parametor call argument
console.log(data)