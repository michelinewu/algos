// SOURCE: ALGO EXPERT

// You're given the head of a singly linked list whose nodes are in sorted order with respect to their values.

// Write a function that returns a modified version of the linked list that doesn't contain any nodes with duplicate values.

// The linked list should be modified in place and the modified linked list should still have its nodes sorted with respect to their values.

// Each LinkedList node has an integer value as well as a next node pointing to the next node in the list or to none/null if it's the tail of the list.

// Sample input:
// linkedList = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 // the head node with value one
// Sample output:
// 1 -> 3 -> 4 -> 5 -> 6

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* ITERATIVE SOLUTION */

// function removeDuplicatesFromLinkedList(linkedList) {
//   // Write your code here.
//   let head = linkedList;
// 	let previous = null;
// 	let map = []

// 	while(head){
// 		if (map.includes(head.value)){
// 			previous.next = head.next;
// 			head = head.next;
// 		} else {
// 			map.push(head.value);
// 			previous = head;
// 			head = head.next;
// 			previous.next = head;
// 		}
// 	}
// 	return linkedList
// }

/* RECURSIVE SOLUTION */

function removeDuplicatesFromLinkedList(linkedList) {
	// input: linkedList
	// output: modified linkedList

	// if the head is null, return
	if (linkedList === null) return null

	// remove duplicates from list after head
	linkedList.next = removeDuplicatesFromLinkedList(linkedList.next)

	// if this current node itself is a duplicate
	if (linkedList.next !== null && linkedList.next.value === linkedList.value) {
		// cut out the duplicate node
		const newHead = linkedList.next
		return newHead
	}

	return linkedList;
}

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;
