//variable

var data1 = 10  // global *vaule inside var con change*    // last route possible
let data2 = 20   // local *vaule inside let can be change*
const data3 = 30  // local *vaule inside const can not be change*

{
    var info1 = 11
    let info2 = 22
    const info3 = 33
    {
        var vaule = 101
        let vaule2 = 102
        const vaule3 = 103
    }
}