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
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Declare the tallest candle
    let tallest = 0;
    // Declare counter
    let counter = 0;

    // Iterate the array
    for (const candle of candles) {
        // Compare if the current candle is higher than the tallest at that moment
        if (candle > tallest) {
            // Replace the tallest candle value
            tallest = candle;
            // Set the counter to one
            counter = 1;
        } else if (candle === tallest) {
            // If they have the same height, increase the counter by one
            counter++;
        }
    }

    // When the array iteration is over, the number of tall candles should be stored in the counter, so return it
    return counter;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
