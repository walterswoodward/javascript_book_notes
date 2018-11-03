// This is the solution to a SIMILAR problem except in this case their are three rather than two partitions:
// 1. Node values < partition
// 2. Node values === partition
// 3. Node values > partition

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
    console.log(this.head);
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
    var currLeft = null;
    var right;
    var currRight = null;
    var mid;
    var currMid = null;

    var node = this.head;
    while (node !== null) {
      if (node.value < partition) {
        if (currLeft === null) {
          left = node;
          currLeft = left;
        } else {
          currLeft.next = node;
          currLeft = currLeft.next;
        }
      } else if (node.value === partition) {
        if (currMid === null) {
          mid = node;
          currMid = mid;
        } else {
          currMid.next = node;
          currMid = currMid.next;
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
    currMid.next = right;
    currLeft.next = mid;
    return left;
  }

  printLinkedList() {
    var node = this.head;
    console.log("start of linked list");
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
    console.log("end of linked list");
  }
}

const ages = new LinkedList(3);
ages.insert(5);
ages.insert(8);
ages.insert(5);
ages.insert(10);
ages.insert(2);
ages.insert(1);
console.log(ages.printLinkedList()); // So you can see order of values before...
console.log(ages.partition(5));
console.log(ages.printLinkedList()); // ...and after.
console.log(ages);
