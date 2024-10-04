import { assertEqual } from "./test-utils";

const arrA: string[] = ["a", "b", "c", "d"];
const arrB: string[] = ["e", "f", "g", "h"];
const emptyArr: string[] = [];


const commonElements = (first: any[], second: any[])=>{
    for(let i= 0 ; i< first.length; i++){ //iterate the items of first
        for( let j= 0; j < second.length; j++){//iterate the items of second
            if(first[i] == second[j])
                return true;
        }
    }
    // all items where iterated but no item matched
    return false;
}

const commonElementsFast = (first: any[], second: any[])=>{
    let secondAsPhrase = second.join();
    for(let i= 0 ; i< first.length; i++){ //iterate the items of first
            if(secondAsPhrase.includes(first[i]))
                return true;
    }
    // all items where iterated but no item matched
    return false;
}

const test = [
    {arrA: ['a','A','b','B','0','3'], arrB: ['c','C','d','D',4,''], expected: false},
    {arrA: ['a','A','b','B','0',4], arrB: ['c','C','d','D',4,''], expected: true},
    {arrA: [1, 2, 'three','IV', 0], arrB: ['A','?','',0], expected: true},
    {arrA: [], arrB: [], expected: false},
];

test.forEach((item, index) => {
    const result = commonElementsFast(item.arrA, item.arrB);
    console.log(`Test ${index + 1} - Expected: ${item.expected} - Result: ${result}`);
    assertEqual(result, item.expected);
});