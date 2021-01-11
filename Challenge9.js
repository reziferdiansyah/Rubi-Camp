function spiral(param1) {
    var list = [];
    var ary = new Array();    //Create Matrix
    for (let i = 0; i < param1; i++) {
        ary[i] = new Array()
        for (let j = 0; j < param1; j++) {
            ary[i][j] = (i * param1) + j
        }
    }
    //End Create Matrix    //Create List
    while (ary.length > 1) {
        //Right
        list = list.concat(ary.splice(0, 1)[0]);
        //Down
        for (var idx in ary) {
            list.push(ary[idx].splice(-1)[0]);
        }
        //Left
        list = list.concat(ary.splice(-1, 1)[0].reverse());
        //Up
        for (var idx = ary.length - 1; idx >= 0; idx--) {
            list.push(ary[idx].splice(0, 1)[0]);
        }
    } if (ary.length > 0) {
        list.push(ary.pop()[0]);
    }
    //End Create List 
    console.log(list)
}
spiral(5)
spiral(6)
spiral(7)