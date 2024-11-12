class StackNode{
    next: null;
    value: any;
    constructor(value: any){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    top: null | any;
    bottom: null | any;
    length: number;

    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {//return the top node
        console.log("peek", this.top);
        return this.top;
    }

    push(value:any){ //insert to the top
        let node = new StackNode(value)
        if(this.isEmpty()){
            this.top = node;
            this.bottom = node;
        }else{
            node.next = this.top;
            this.top = node;
        }
        this.length ++
    }

    pop(){//remove the top node
        if(this.isEmpty()){
            console.log("there is nothing to be removed")
            return
        } 
        if(this.length == 1){
            this.top = null
            this.bottom = null
        }else{
            this.top = this.top.next
        }
        this.length --
    }

    isEmpty(){ //check if the stack is empty
        return this.top === null;
    }
}

var myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack);
myStack.push('github');
myStack.push('stackoverflow');
myStack.peek();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();
console.log(myStack);
myStack.pop();