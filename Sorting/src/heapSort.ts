function heapify(arr: number[], n: number, i: number) {

    // Initialize largest as root
    let largest = i;
    
    // left index = 2*i + 1
    let l = 2 * i + 1; 
    
    // right index = 2*i + 2
    let r = 2 * i + 2; 

    // If left child is larger than root
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    // If right child is larger than largest so far
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    // If largest is not root
    if (largest !== i) {
        let temp = arr[i]; // Swap
        arr[i] = arr[largest];
        arr[largest] = temp;

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// Main function to do heap sort
function heapSort(arr: number[]) {
    let n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
    
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

// A utility function to print array of size n
function printArray(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] + " ");
    }
    console.log();
}

let arr = [35, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
heapSort(arr);
console.log(arr);