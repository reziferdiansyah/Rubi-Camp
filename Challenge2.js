function deretKaskus(n) {
    var jumlah = []
    for (var i = 1; i <= n; i++) {
        var hasil = i * 3
        if (hasil % 5 == 0 && hasil % 6 == 0)
            jumlah.push("KASKUS")
        else if (hasil % 5 == 0)
            jumlah.push("KAS")
        else if (hasil % 6 == 0)
            jumlah.push("KUS")
        else
            jumlah.push(i * 3)

    } return jumlah
}
console.log(deretKaskus(10));