class LinkedList {
  constructor(value) {
    this.head = {
      value, // short hand for value: value
      next: null
    };
    this._length = 1;
  }

  insert(value) {
    let current = this.head;
    let newNode = new LinkedList(value);
    if (current === undefined) {
      this.head = newNode.head;
      this._length++;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode.head;
    this._length++;
  }
 
  partition(partition) {
    var left;
    var right;
    var currLeft = null;
    var currRight = null;
  
    var node = this.head;
    // You traverse through each of the nodes in the LinkedList, saving them in
    // one of two lists, left or right. When you have reached the end of the
    // list, you then define the left list's last node's next as the right list,
    // effectively merging the lists into one.
    while (node !== null) {
      if (node.value < partition) {
        if (currLeft === null) {
          left = node;
          currLeft = left;
        } else {
          currLeft.next = node;
          currLeft = currLeft.next;
        }
      } else {
        if (currRight === null) {
          right = node;
          currRight = right;
        } else {
          currRight.next = node;
          currRight = currRight.next;
        }
      }
      node = node.next;
    }
    currRight.next = null;
    currLeft.next = right;
    return left;
  };

  printLinkedList() {
    var node = this.head;
    console.log('start of linked list');
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
    console.log('end of linked list');
  };
}

const ages = new LinkedList(3);
ages.insert(5);
ages.insert(8);
ages.insert(5);
ages.insert(10);
ages.insert(2);
ages.insert(1);
console.log(ages.partition(5))
console.log(ages.printLinkedList())
console.log(ages);
