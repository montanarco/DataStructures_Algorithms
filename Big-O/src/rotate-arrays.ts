import { assertEqualArrays } from "./test-utils";

function rotateArray(array: any[], places: number): Array<any>{
    const placesToRotate = array.length - places;
    const firstPart = array.slice(0, placesToRotate);
    const secondPart = array.slice(placesToRotate, array.length);
    return [...secondPart, ...firstPart];
}

const testItems = [
    { input: [1,2,3,4,5,6], k: 2, expected: [5,6,1,2,3,4]}, 
    { input: [-1,-2,-3,-4,-5,-6], k: 4, expected: [-3,-4,-5,-6,-1,-2]}, 
    { input: ['a','b','c','d','e','f'], k: 6, expected: ['a','b','c','d','e','f']}, 
    { input: ['a',1,'c',2,'e',3,'d',true], k: 3, expected: [3,'d',true,'a',1,'c',2,'e']}
];

testItems.forEach((item,index)=>{
    let actual = rotateArray(item.input, item.k);
    console.log(`Test ${index + 1} - Expected: ${item.expected} - Result: ${actual}`);
    assertEqualArrays(actual, item.expected)
});