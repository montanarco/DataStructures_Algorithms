function fibonacci_recursive(input : number): number{ // O( 2 to N)
    if( input == 2)
        return 1
    if( input == 1)
        return 0
    return fibonacci_recursive(input - 1) + fibonacci_recursive(input - 2) 
}

function fibonacci_iterative(input : number): number{ // O(n)
    let first = 0
    let second = 1
    let counter = 1
    let result = 0

    while(counter < input -1){
        result = first + second
        first = second
        second = result
        counter ++
        
    }

    return result
}

console.log("fibonacci_recursive of 1:", fibonacci_recursive(1));
console.log("fibonacci_recursive of 5:", fibonacci_recursive(5));
console.log("fibonacci_recursive of 10:", fibonacci_recursive(10));


console.log("fibonacci_iterative of 1:", fibonacci_iterative(1));
console.log("fibonacci_iterative of 5:", fibonacci_iterative(5));
console.log("fibonacci_iterative of 10:", fibonacci_iterative(10));