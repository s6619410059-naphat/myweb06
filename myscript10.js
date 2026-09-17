//arrow function
let data1 = () => console.log("Hi..."); //no parameter no return value

let data2 = (x, y) => console.log(x + y); //with parameter no return value

let data3 = () => "hello"; //no parameter with return value

let data4 = (x, y) => x + y; //with parameter with return value

let data5 = (x) => console.log(`x is ${x}`); //with single parameter no return value

//--------------------
data1();
data2(10, 20);

console.log(data3());
console.log(data4(5, 10));
data5(100);
