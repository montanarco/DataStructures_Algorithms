
class ListNode{
    value: any;
    next: ListNode | null;

    constructor(value: any, next: ListNode | null = null){
      this.value = value;
      this.next = next;
    }
}

class LinkedList {
    head: any;
    tail: any;
    length: number;

    constructor(value : any) {
      this.head  = new ListNode(value);
      this.tail = this.head;
      this.length = 1;
    }

    append(value: any) {
        const node = new ListNode(value);
        this.tail.next = node;
        this.tail = node;
        this.length ++;
    }

    prepend(value: any){
      const node = new ListNode(value);
      node.next = this.head;
      this.head = node;
      this.length ++;
    }

    insert(index: number, value: any){
      if (index === 0) {
        this.prepend(value);
        return;
      }

      if(index >= this.length){
        this.append(value);
        return;
      }

      let indexNode: (ListNode | null) = this.traverseToIndex(index-1);

      if (indexNode === null) {
        throw new Error('Index out of bounds');
      }

      let nextNode = indexNode.next;
      let newNode = new ListNode(value);
      indexNode.next = newNode;
      newNode.next = nextNode;

      this.length ++;
    }

    traverseToIndex(index: number) {
      //Check parameters
      let counter = 0;
      let currentNode = this.head;
      while(counter !== index){
        currentNode = currentNode.next;
        counter++;
      }
      return currentNode;
    }

    remove(index: number) {
      // Check Parameters    
      let prevNode: (ListNode) = this.traverseToIndex(index-1);
      let currentNode = prevNode?.next;
      if(currentNode?.next !== null || currentNode?.next !== undefined)
        prevNode.next = currentNode?.next ?? null;
      this.length --;
    }

    reverse() {
      this.tail = this.head;
      let first = this.head;
      let second = first.next;
      let temp;
      first.next = null;

      while(second.next){
        temp = second.next;
        second.next = first;
        first = second;
        second = temp
      }
      second.next = first;
      this.head = second;
    }

    printList() {
      const array = [];
      let currentNode = this.head;
      while(currentNode !== null){
          array.push(currentNode.value)
          currentNode = currentNode.next
      }
      console.log(array);
    }

}
  
let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.append(20);
myLinkedList.prepend(3)
myLinkedList.printList();
myLinkedList.insert(2, 14)
myLinkedList.insert(20, 77)
myLinkedList.insert(4, 44)
myLinkedList.printList();
myLinkedList.remove(3);
myLinkedList.remove(6);
myLinkedList.printList();
myLinkedList.reverse();
myLinkedList.printList();

console.log(myLinkedList);