//callback function

function myFuncA(xx, yy, zz) {
    let data = xx + yy(20, 30)   //callback function
    console.log(data)
    zz('ABC')
}

//------------------------

myFuncA(
    100,
    function (x, y) {   //callback function
        return x * y
    },
    (info) => {   //callback function
        console.log(`info is ${info}`)
    }
)