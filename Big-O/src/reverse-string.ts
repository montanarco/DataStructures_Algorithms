import { assertEqual } from "./test-utils";
/**
 * 
 * @param input receices a string
 * @returns returns the reverse of the input string
 */
function reverseString(input: string): string {
    const inputLetters: string[] = input.split('');
    let aux: string;
    const inputLetterslenght = inputLetters.length - 1;
    for(let i = 0; i < Math.ceil(inputLetters.length/2); i++ ){
        // check that always the index in less than the opposite index otherwise stop the loop 
        if(i >= (inputLetterslenght-i)) break;
        aux = inputLetters[inputLetterslenght-i]
        inputLetters[inputLetterslenght-i] = inputLetters[i]
        inputLetters[i] = aux
        
    } 
    const result = inputLetters.join('');
    return result;
}

const testItems = [
    { input: "Hello", expected: "olleH" }, 
    { input: "World", expected: "dlroW" },
    { input: "My name is Miguel", expected: "leugiM si eman yM" },
    { input: "987 654 321", expected: "123 456 789" },
    { input: "", expected: "" },
    { input: "somos somos", expected: "somos somos" },
];

testItems.forEach((item,index)=>{
    let actual = reverseString(item.input);
    console.log(`Test ${index + 1} - Expected: ${item.expected} - Result: ${actual}`);
    assertEqual(actual, item.expected)
});