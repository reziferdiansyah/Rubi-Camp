function stringManipulation(word) {
    let hewan = word[0]
    if (hewan == 'a' ||
        hewan == 'i' ||
        hewan == 'u' ||
        hewan == 'e' ||
        hewan == 'o')
        return word
    else {
        return word.slice(1) + hewan + 'nyo'
    }
}

console.log(stringManipulation('ayam')); //'ayam'
console.log(stringManipulation('bebek')); // 'ebeknyo'

