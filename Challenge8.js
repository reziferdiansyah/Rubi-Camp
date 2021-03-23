function pola(str) {
    var strArray = str.split(' ')
    var result = new Array ;
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            if(parseInt(strArray[0].replace('#', i)) * parseInt(strArray[2]) === parseInt(strArray[4].replace('#', j))){
                result.push(i, j)
            }
        }
    }
    return result
}

console.log(pola('42#3 * 188 = 80#204'));
// result: [8, 5]
console.log(pola('8#61 * 895 = 78410#5'))
// result: [7, 9]