function factorial_recursive(input: number): number { // O(n)
    if(input <= 1){
        return 1
    }
    return input * factorial_recursive(input-1)
}

function factorial_iterative(input: number){ // O(n)
    let counter = 1;
    let factorial = 1;
    while (counter <= input){
        factorial = factorial * counter
        counter ++
    }
    return factorial   
}

console.log("factorial_iterative of 5: ", factorial_iterative(5));

console.log("factorial_recursive of 5: ", factorial_recursive(5));
