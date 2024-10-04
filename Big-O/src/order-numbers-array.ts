let numArray: number[] = [12,5,19,3,14,8,20,17,11,6,4,5];

// sort the numbers in ascending order using typescript
let sortedNumbers = orderNumbers(numArray);

function orderNumbers(numbers: number[]): number[] {
    let n = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            n++;
            if (numbers[i] < numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    console.log("operations performed:",n);
    return numbers;
}

console.log(sortedNumbers); 