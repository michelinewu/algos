// SOURCE: HACKERRANK

// A left rotation operation on an array shifts each of the array's elements  unit to the left. For example, if  left rotations are performed on array , then the array would become . Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.

// Given an array  of  integers and a number, , perform  left rotations on the array. Return the updated array to be printed as a single line of space-separated integers.

// Function Description

// Complete the function rotLeft in the editor below.

// rotLeft has the following parameter(s):

// int a[n]: the array to rotate
// int d: the number of rotations
// Returns

// int a'[n]: the rotated array
// Input Format

// The first line contains two space-separated integers  and , the size of  and the number of left rotations.
// The second line contains  space-separated integers, each an .

// Constraints

// Sample Input

// 5 4
// 1 2 3 4 5
// Sample Output

// 5 1 2 3 4

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the rotLeft function below.
function rotLeft(a, d) {

    // a is array of numbers

    // d is number to rotate

    // declare new array to store numbers

    let shifted_vals = []

    // declare new variable for start value
    let start = d;

    if (d === 0) {
        return a;
    } else if (d === 1) {
        start = a.length - 2;
    } else if (d === 2) {
        start = a.length - 1;
    }

    // two for loops:

    // one to iterate from the number to switch to the end and append to new array
    for (let i = start; i < a.length; i++) {
        shifted_vals.push(a[i]);
    }

    // one to iterate through the beginning of the loop and append to new array
    for (let i = 0; i < start; i++) {
        shifted_vals.push(a[i]);
    }

    // return new array
    return shifted_vals;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nd = readLine().split(' ');

    const n = parseInt(nd[0], 10);

    const d = parseInt(nd[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = rotLeft(a, d);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
