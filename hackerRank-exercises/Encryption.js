'use strict';

const fs = require('fs');

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
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Remove spaces from the input string
    const noSpacesMessage = s.replace(/ /g, '');
    const messageLength = noSpacesMessage.length;
    const rootLength = Math.sqrt(messageLength);
    let rows = Math.floor(rootLength);
    let columns = Math.ceil(rootLength);

    // Adjust the matrix size if necessary
    if (rows * columns < messageLength) {
        rows = columns;
    }

    // Create the matrix
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < columns; j++) {
            const char = noSpacesMessage[i * columns + j] || '';
            row.push(char);
        }
        matrix.push(row);
    }

    // Create the encrypted message
    let encryptedMessage = '';
    for (let i = 0; i < columns; i++) {
        for (let j = 0; j < rows; j++) {
            encryptedMessage += matrix[j][i];
        }
        encryptedMessage += ' ';
    }

    // Trim the trailing space and return the result
    return encryptedMessage.trim();
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = encryption(s);

    ws.write(result + '\n');

    ws.end();
}
