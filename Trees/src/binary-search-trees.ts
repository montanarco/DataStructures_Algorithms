class NodeBST {

  value: any;
  left: NodeBST | null;
  right: NodeBST | null;

  constructor(value: any) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  root: NodeBST | null;

  constructor() {
    this.root = null;
  }

  insert(value: any) {
    const newNode = new NodeBST(value);

    if (this.root == null) {
      this.root = newNode;
      return;
    }

    let compareItem = this.root
    let inserted = false
    let counter = 0
    while (!inserted) {
      if (compareItem.value == value) {
        console.log("value already present")
        return;
      }

      if (compareItem.value > value) {
        //go to left
        if (compareItem.left == null) {
          compareItem.left = newNode
          counter = 0
          inserted = true
          break;
        } else {
          compareItem = compareItem.left
        }
      } else {
        //go to right
        if (compareItem.right == null) {
          compareItem.right = newNode
          counter = 0
          inserted = true
          break;
        } else {
          compareItem = compareItem.right
        }
      }

    }
  }

  lookup(value: any): { node: NodeBST | null; parent: NodeBST | null } {
    if (this.root == null) return { node: null, parent: null };
  
    let currentNode: NodeBST | null = this.root;
    let parentNode: NodeBST | null = null;
  
    while (currentNode) {
      if (currentNode.value === value) {
        return { node: currentNode, parent: parentNode };
      } else if (value < currentNode.value) { // go left
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else { // go right
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }
    
    return { node: null, parent: null }; // if value not found
  }

  remove(value: any) {
    const { node, parent } = this.lookup(value);
    
    if (!node) {
      console.log("not found, nothing to remove");
      return null;
    }
  
    // Case 1: Node is a leaf (no children)
    if (!node.left && !node.right) {
      if (parent) {
        if (parent.left === node) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      } else {
        this.root = null; // If it's the root node
      }
      return;
    }
  
    // Case 2: Node has only left child
    if (node.left && !node.right) {
      if (parent) {
        if (parent.left === node) {
          parent.left = node.left;
        } else {
          parent.right = node.left;
        }
      } else {
        this.root = node.left; // Node is root
      }
      return;
    }
  
    // Case 3: Node has only right child
    if (!node.left && node.right) {
      if (parent) {
        if (parent.left === node) {
          parent.left = node.right;
        } else {
          parent.right = node.right;
        }
      } else {
        this.root = node.right; // Node is root
      }
      return;
    }
  
    // Case 4: Node has both left and right children
    if (node.left && node.right) {
      let auxNode = this.findTheNodeMostToLeftInRightBranch(node.right);
      if (auxNode) {
        auxNode.left = node.left;
        if (parent) {
          if (parent.left === node) {
            parent.left = auxNode;
          } else {
            parent.right = auxNode;
          }
        } else {
          this.root = auxNode; // Node is root
        }
      }
    }
  }
  
  findTheNodeMostToLeftInRightBranch(node: NodeBST) {
    let current = node;
    let parent = null;
  
    while (current.left) {
      parent = current;
      current = current.left;
    }
  
    // If the aux node has a right child, we need to reattach it to its parent
    if (parent && current.right) {
      parent.left = current.right;
    }
  
    return current;
  }
  
}


const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(JSON.stringify(traverse(tree.root)));
console.log(tree.lookup(20));
console.log(tree.lookup(111));
console.log(tree.lookup(6));
tree.remove(4);
console.log(JSON.stringify(traverse(tree.root)));
//     9
//  4     20
//1  6  15  170

function traverse(node: NodeBST | null): any {
  if (node === null) return null;

  const tree: { value: any; left: any; right: any } = {
    value: node.value,
    left: null,
    right: null
  };

  tree.left = traverse(node.left);
  tree.right = traverse(node.right);

  return tree;
}

