// Class
const LinkedList = function(value) {
  this.value = value;
  this.next = null;
};

// Function
const deleteNode = function(node) {
  if (node === null || node.next === null) {
    return false;
  }
  let next = node.next;
  node.value = next.value;
  node.next = next.next;
  return true;
};

var a = new LinkedList("a");
var b = new LinkedList("b");
var c = new LinkedList("c");
var d = new LinkedList("d");
var e = new LinkedList("e");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(deleteNode(c))
console.log(a);
// You cannot delete the last node - per instructions.
console.log(deleteNode(e))
// Without access to the head node, restricting deletion of the first node is not possible (at least as far as I know :/)
console.log(deleteNode(a))
