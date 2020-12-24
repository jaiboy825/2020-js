// const data = {
//     name : '전제',
//     age : 18
// }
// function jeonjai(a, b){
//     return a + b;
// }

const { rejects } = require("assert");
const { resolve } = require("path");

// module.exports.jai = function(a, b){
//     return a + b;
// }
// module.exports.jeon = jeonjai;
// module.exports.data = data;

function getCovidData(){
    //여기서 뭔가 시간이 걸리는 작업이 이뤄지는 거야
    return new Promise((resolve, rejects) => {
        setTimeout(()=>{
            resolve("Hello world");
        },3000);
    });
    
    
}
getCovidData().then(x => {
    console.log(x);
});