const numbers3 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort(array: number[]) : number[]{
    if (array.length === 1) {
        return array;
    }

    // Split Array in into right and left
    const middle = Math.floor(array.length / 2)

    const left: number[] = array.slice(0, middle)
    const right: number[] =  array.slice(middle, array.length)

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
    let i = 0;
    let j = 0;
    let result =[]
    while (i < left.length && j < right.length) {
        if(left[i]<right[j]){
            result.push(left[i])
            i ++
        }
        else{
            result.push(right[j])
            j ++
        }
    }
    while(i < left.length){
        result.push(left[i])
        i ++
    }
    while(j < right.length){
        result.push(right[j])
        j ++
    }
    return result
}

const answer = mergeSort(numbers3);
console.log(answer);