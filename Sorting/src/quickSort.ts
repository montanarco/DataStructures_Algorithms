const numbers4 = [35, 99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array: number[]):number[]{
    if (array.length <= 1) {
      return array;
    }
  
    let pivot = array[0];
    let leftArr: number[] = []; 
    let rightArr: number[] = [];
  
    for (let i = 1; i < array.length; i++) {
      if (array[i] < pivot) {
        leftArr.push(array[i]);
      } else {
        rightArr.push(array[i]);
      }
    }

    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  };


const result = quickSort(numbers4);
console.log(result);