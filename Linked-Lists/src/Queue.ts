class QueueNode{
    value: any
    next: null | any

    constructor(value: any){
        this.value = value
        this.next = null
    }
}

class Queue{
    first: null | any
    last: null | any
    length: number

    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }

    peek(){
        console.log('Peek Node:', this.first)
        return this.first;
    }

    enqueue(value:any){
        const newNode = new QueueNode(value);
        if(this.isEmpty()){
            this.first = newNode
            this.last = newNode
        }else{
            this.last.next = newNode
            this.last = newNode
        }
        this.length ++
    }

    dequeue(){
        if(this.isEmpty()){
            console.log('there is nothing in the dequeue');
            return null
        }

        if(this.first === this.last){ //there is only one item left
            this.last = null
        }

        const tempNode = this.first
        this.first = null
        this.length --
        return tempNode
    }

    isEmpty(){
        return this.length === 0;
    }
}

var myQueue = new Queue()
myQueue.enqueue('Alice')
myQueue.enqueue('Bob')
myQueue.enqueue('Charly')
myQueue.peek()
console.log(myQueue)
myQueue.dequeue()
myQueue.enqueue('Diana')
console.log(myQueue)
myQueue.dequeue()
myQueue.enqueue('Ellen')
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.dequeue()
console.log(myQueue)
myQueue.dequeue()