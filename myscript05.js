//loop, array and Object
//            0   1   2   3         inside every Array have index lable it
let data1 = [10, 20, 30, 40] 

//how to use the data inside Array
// route 1
for (let i = 0; i < data1.length; i++){
    console.log(data1[i]* 100)
}
console.log('---------------------')

//route 2
data1.forEach((value) => {
    console.log(value * 100)
});
console.log('---------------------')

//route 3 **recommend
data1.map((value)=>{
    console.log(value * 100)
})
console.log('---------------------')

//route 4
for (let vaule of data1) {
    console.log(vaule * 100)
}
console.log('---------------------')

//route 5
for (let i in data1) {
    console.log(data1[i] * 100)
}
console.log('---------------------')