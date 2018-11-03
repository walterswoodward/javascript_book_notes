// Note: This solution assumes that te difference in length between the inputted Linked Lists is not more than 1 digit.
class LinkedList {
  constructor(value) {
    (this.value = value), // short hand for value: value
      (this.next = null),
      (this._length = 1);
  }
  insert(value) {
    let current = this;
    let newNode = new LinkedList(value);
    if (current.value === undefined) {
      throw new Error(
        "Don't forget to pass in a value when declaring LinkedList instance"
      );
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    this._length++;
  }
}

// sumNodes takes two LinkedLists, the node values of which represent the numbers in a decimal number (e.g. tail = one's place, node before tail = ten's place etc.)
const sumNodes = (d1, d2) => {
  // Make copies of d1 and d2 in node1 and node2
  // node1, node2, and node3 will represent the current node being looked at in d1, d2, and d3 respectively
  let node1 = d1;
  let node2 = d2;
  let node3 = null;
  let d3 = null;

  let ones;
  let carry = 0;
  let sum;

  while (node1 !== null && node2 !== null) {
    // These first two conditions are just edge cases if either of the input nodes are empty
    if (node1 === null) {
      sum = node2.value;
    } else if (node2 === null) {
      sum = node1.value;
      // This last conditional is run each time node1 and node2 values are changed (see below at "node1 = node1.next")
    } else {
      sum = node1.value + node2.value;
    }

    // The sum, calculated above (sum of current values from node1 and node2)
    // must also include any carry over from the previous sum.  In this case,
    // since the sum of node1 + node2 is 12, the one from 12 needs to be carried
    // over and to the tens place digits, just like you would when adding
    // numbers by hand.
    sum += carry;
    ones = sum % 10;
    if (node3 === null) {
      // ultimately this will be out returned OUTPUT
      d3 = new LinkedList(ones);
      node3 = d3;
      // node3._length++
    } else {
      // console.log(ones);
      // console.log(d3._length)
      node3.next = new LinkedList(ones); // This updates d3 as well
      d3._length++;
      // console.log(d3._length)
      node3 = node3.next;
    }

    // Adds carry over from current place (e.g. ones) to next (e.g. tens)
    carry = Math.floor(sum / 10);

    if (node1 !== null) {
      node1 = node1.next;
    }

    if (node2 !== null) {
      node2 = node2.next;
    }
  }
  console.log(node1);
  console.log(node2);
  // If `carry` has a value after breaking out of the previous while loop, then
  // that means one more node must be added as the last two highest place
  // digit's sum was greater than 10.  In this case, as I have adjusted the
  // inputs to reflect this scenario, although the input nodes (495 and 617) only went to the
  // hundreds place, the output node goes to the thousands (1112).
  if (carry > 0) {
    // Edge Case: If node1 is longer than node2
    if (node1 !== null && node2 === null) {
      carry += node1.value;
      // If node2 is longer than node1
    } else if (node2 !== null && node1 === null) {
      carry += node2.value;
    }
    // Edge case: If node1 + carry OR node2 + carry === 10 (it logically cannot equal any other double digit int)
    if (carry === 10) {
      node3.next = new LinkedList(0);
      d3._length++;
      node3.next.next = new LinkedList(1);
      d3._length++;
      return d3;
    }
    node3.next = new LinkedList(carry);
    d3._length++;
    return d3;
  }

  return d3;
};

const digit1 = new LinkedList(7);
digit1.insert(1);
digit1.insert(6);
digit1.insert(9);


const digit2 = new LinkedList(5);
digit2.insert(9);
digit2.insert(4);

console.log(sumNodes(digit1, digit2));
console.log(digit1);
console.log(digit2);
