let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tulis kalimatmu disini > '
});

rl.prompt()
rl.on(
    'line', (sentences) => {
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
        } function sentencesManipulation(sentences) {
            let vet = sentences.split(' ')
            let hasil = [];
            for (let i = 0; i < vet.length; i++) {
                hasil += stringManipulation(vet[i]) + ' '
            }
            return hasil
        }
        if (sentences == 'Good Bye!') {
            rl.close();
        } else {
            console.log('Hasil konversi : ' + sentencesManipulation(sentences))
            rl.prompt()
        }
    }
);