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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    let counterMap = {};
    let maxCount = 0;

    // Count occurrences of each number
    for (let i = 0; i < a.length; i++) {
        let num = a[i];
        counterMap[num] = (counterMap[num] || 0) + 1;
    }

    // Find the longest substring
    for (let key in counterMap) {
        let currentCount = counterMap[key];
        let nextCount = counterMap[Number(key) + 1] || 0;
        maxCount = Math.max(maxCount, currentCount + nextCount);
    }

    return maxCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
