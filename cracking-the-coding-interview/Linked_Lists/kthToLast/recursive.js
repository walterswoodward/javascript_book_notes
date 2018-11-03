// Recursive Solution:
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
  // Finds kth value where k = 1 returns the last node, k=2 returns the second to last node etc.
  findNode(k) {
    let output = null
    if (k <= 0 || k > this._length) {
      throw new Error("No nodes at given position");
    } else {
      const recurse = (k, head) => {
        if (k === this._length){
          output = head
          return 
        } else {
          recurse(k + 1, head.next)
        }
      }
      recurse(k, this.head)
      return output
    }
  }
}

const keySeq = new LinkedList(1493827);
keySeq.insert(27453896);
keySeq.insert(19673520);
keySeq.insert(83649956);
console.log(keySeq.findNode(1));
console.log(keySeq);
