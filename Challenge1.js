function sum() {
  var jumlah = 0;
  for (var i = 0; i < arguments.length; i++) {
    jumlah += arguments[i];
  }
  console.log(jumlah)
}


sum(1, 2, 7) //10
sum(1, 4) //5
sum(11) //11
sum(10, 3, 6, 7, 9) //35
