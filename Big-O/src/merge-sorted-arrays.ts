import { assertEqualArrays } from "./test-utils";

/**
 * 
 * @param firstArr sorted array of numbers
 * @param secondArr sorted array of numbers
 * @returns the 2 input arrays sorted as a single array
 */
const mergeSortedArrays = (firstArr: number[], secondArr: number[]): number[] => {
    let mergedArray: number[] = [];
    let index1 = 0;
    let index2 = 0;

    while (index1 < firstArr.length && index2 < secondArr.length) {
        if (firstArr[index1] < secondArr[index2]) {
            mergedArray.push(firstArr[index1]);
            index1++;
        } else {
            mergedArray.push(secondArr[index2]);
            index2++;
        }
    }

    // Add remaining elements from firstArr
    while (index1 < firstArr.length) {
        mergedArray.push(firstArr[index1]);
        index1++;
    }

    // Add remaining elements from secondArr
    while (index2 < secondArr.length) {
        mergedArray.push(secondArr[index2]);
        index2++;
    }

    return mergedArray;
}

const test = [
    {arr1:[0,4,8,15,19],  arr2: [7,10,15,23], expected: [0,4,7,8,10,15,15,19,23]},
    {arr1:[1,2,3,4],      arr2: [5,6,7,8],    expected: [1,2,3,4,5,6,7,8]},
    {arr1:[1,3,5,7,9],    arr2: [2,4,6,8],    expected: [1,2,3,4,5,6,7,8,9]},
    {arr1:[1,1,2,2,3,3],  arr2: [1,2,3,4],    expected: [1,1,1,2,2,2,3,3,3,4]}
];

test.forEach((item, index) => {
    const result = mergeSortedArrays(item.arr1, item.arr2);
    console.log(`Test ${index + 1} - Expected: ${item.expected} - Result: ${result}`);
    assertEqualArrays(item.expected, result);
});