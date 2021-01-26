// SOURCE: LEETCODE

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0


// Constraints:

// -231 <= x <= 231 - 1

var reverse = function(x) {
  const xArray = x.toString().split("").map(Number)
  let reversedArray = []
  while (xArray.length !== 0) {
      reversedArray.push(xArray.pop())
  }
  const xReversed = parseInt(reversedArray.join(''),10)
  if (xReversed > (Math.pow(2, 31)-1) || (-Math.abs(xReversed) < Math.pow(-2, 31))) {
      return 0
  } else if (x < 0) {
      return -Math.abs(parseInt(reversedArray.join(''),10))
  } else {
      return parseInt(reversedArray.join(''),10)
  }
};
