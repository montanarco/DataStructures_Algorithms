'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'checkMagazine' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY magazine
 *  2. STRING_ARRAY note
 */

function checkMagazine(magazine, note) {
    // Write your code here
    
    // separate the words available in the magazine 
    // iterate them and count them as keys as a map
    const magazineWordsMap =  transformArrayIntoMap(magazine);

    // separate the words in the note
    // iterate them and count them as a map
    const noteWordsMap =  transformArrayIntoMap(note)
        
    // check if the words requiered for the note are availble in the magazine
    // means iterate all key in the note and compare the number requiered vs the availables in the  magazine
    for (const [key, value] of Object.entries(noteWordsMap)) { // Cambiado "in" por "of"
        // Si una de ellas es menor en la revista que en la nota, devuelve "No"
        if (value > (magazineWordsMap[key] || 0)) { // Evita problemas si la palabra no existe en la revista
            console.log("No")
            return;
        }
    }
    console.log("Yes")
    return;
}

function transformArrayIntoMap(wordsArray){
    let wordsMap = Object.create({});
    for(let i = 0; i < wordsArray.length; i++ ){
        let value = wordsArray[i];
        if (wordsMap[value]){
            wordsMap[value] ++;
        }
        else {
            wordsMap[value] = 1;
        }
    }
    return wordsMap;
}

function main() {
    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const m = parseInt(firstMultipleInput[0], 10);

    const n = parseInt(firstMultipleInput[1], 10);

    const magazine = readLine().replace(/\s+$/g, '').split(' ');

    const note = readLine().replace(/\s+$/g, '').split(' ');

    checkMagazine(magazine, note);
}