SOURCE: LEETCODE

Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {

  /* ITERATIVE SOLUTION */

  if (head === null) return head
  let previous = null
  let current = head
  while (current) {
      let temp = current.next
      current.next = previous
      previous = current
      current = temp
  }
  return previous

  /* RECURSIVE SOLUTION */

  // if (head === null || head.next === null) return head
  // let last = reverseList(head.next)
  // head.next.next = head
  // head.next = null
  // return last

};
