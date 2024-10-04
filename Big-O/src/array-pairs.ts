let numbers: number[] = [1,2,3,4,5];

function findPairs(number:number[]) {
    //improve the performance of this function
    number.forEach(item => {
        number.forEach(element => {
            console.log( item.toString() + element.toString());
        });
    });
}

findPairs(numbers);