import { assertEqual } from "./test-utils";

function firstRecurrentChar(arr: number[]): number | undefined {
    let charMap = Object.create({});
    for(let i=0 ; i< arr.length; i++){
        let itemValue = arr[i].toString();
        if(itemValue in charMap){
            return arr[i];
        }else{
            charMap[itemValue] = i;
        }
    }
    return undefined;
}

const test = [{ input: [2, 5, 1, 2, 3, 5, 1, 2, 4], output: 2 },
{ input: [2, 1, 1, 2, 3, 5, 1, 2, 4], output: 1 },
{ input: [2, 3, 4, 5], output: undefined },
{ input: [2, 5, 5, 2, 3, 5, 1, 2, 4], output: 5 }]


test.forEach((item, index) => {
    let actual = firstRecurrentChar(item.input);
    console.log(`Test - ${index + 1} - Expected: ${ item.output} - Actual: ${ actual}`);
    assertEqual(actual, item.output);
})