const numbers2 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array: number[]) {
    let minIndex, temp;
    for(let i = 0; i < array.length; i++){
        minIndex = i;
        for(let j = i + 1; j < array.length; j++){
            // Compare the element to the rest in the array and find the minimum
            if(array[j] < array[minIndex]){
                minIndex = j; // Update the minIndex
            }
        }
        // Swap the found minimum element with the first element
        if(minIndex !== i) {
            temp = array[i];
            array[i] = array[minIndex];
            array[minIndex] = temp;
        }
    }
}

selectionSort(numbers2);
console.log(numbers2);