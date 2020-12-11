const data = {
    name : '전제',
    age : 18
}
function jeonjai(a, b){
    return a + b;
}

module.exports.jai = function(a, b){
    return a + b;
}
module.exports.jeon = jeonjai;
module.exports.data = data;