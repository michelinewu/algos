// SOURCE: LEETCODE

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true
// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let values = []
  let current = head
  while (current) {
      values.push(current.val)
      current = current.next
  }
  for (let i = 0; i < (values.length-1)/2; i++) {
      if (values[i] !== values[values.length-1-i]) return false
  }
  return true
};
