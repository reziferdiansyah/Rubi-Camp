function stringManipulation(word) {
    let hewan = word[0]
    if (hewan == 'a'||
        hewan == 'i' ||
        hewan == 'u' ||
        hewan == 'e' ||
        hewan == 'o')
        return word
    else {
        return word.slice(1) + hewan + 'nyo'
    }
}
function sentencesManipulation(sentences) {
    let nilai = sentences.split(' ');
    let jumlah = []
    for (let i = 0; i < nilai.length;i++) {
        jumlah += stringManipulation(nilai[i]) + ' ';
    }
    return jumlah
}


console.log(sentencesManipulation('ibu pergi ke pasar bersama aku')); // ibu ergipnyo eknyo asarpnyo ersamabnyo aku