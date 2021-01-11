function weirdMultiply(sentence) {
    var max = sentence.toString().split('')
    var min = max.map(Number)
    if (min.length > 1) {
        var hasil = 1
        for (var i = 0; i < min.length; i++) {
            hasil = hasil * min[i]
        }
        return weirdMultiply(hasil)
    } else 
        return sentence
}

console.log(weirdMultiply(39)); // -> 3 * 9 = 27 -> 2 * 7 = 14 -> 1 * 4 = 4
console.log(weirdMultiply(999)); // -> 9 * 9 * 9 = 729  -> 7 * 2 * 9 = 126 -> 1 * 2 * 6 = 12 -> 1 * 2 = 2
console.log(weirdMultiply(3)); // -> 3 karena telah 1 digit
