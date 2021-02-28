// SOURCE: LEETCODE

// At a lemonade stand, each lemonade costs $5.
// Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).
// Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill.  You must provide the correct change to each customer, so that the net transaction is that the customer pays $5.
// Note that you don't have any change in hand at first.
// Return true if and only if you can provide every customer with correct change.

// Example 1:
// Input: [5,5,5,10,20]
// Output: true
// Explanation:
// From the first 3 customers, we collect three $5 bills in order.
// From the fourth customer, we collect a $10 bill and give back a $5.
// From the fifth customer, we give a $10 bill and a $5 bill.
// Since all customers got correct change, we output true.

// Example 2:

// Input: [5,5,10]
// Output: true
// Example 3:

// Input: [10,10]
// Output: false
// Example 4:

// Input: [5,5,10,10,20]
// Output: false
// Explanation:
// From the first two customers in order, we collect two $5 bills.
// For the next two customers in order, we collect a $10 bill and give back a $5 bill.
// For the last customer, we can't give change of $15 back because we only have two $10 bills.
// Since not every customer received correct change, the answer is false.


// Note:

// 0 <= bills.length <= 10000
// bills[i] will be either 5, 10, or 20.

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  let fives = 0
  let tens = 0
  let twenties = 0
  for (let i = 0; i < bills.length; i++) {
      if (bills[i] === 5) {
          fives++
      } else if (bills[i] === 10 && fives > 0) {
          fives--
          tens++
      } else if (bills[i] === 20 && tens > 0 && fives > 0) {
          twenties++
          tens--
          fives--
      } else if (bills[i] === 20 && fives >= 3) {
          twenties++
          fives = fives - 3
      }
      else return false
  }
  return true
};

// USING MAP

/**
 * @param {number[]} bills
 * @return {boolean}
 */
// var lemonadeChange = function(bills) {
//   let cash = {
//       5: 0,
//       10: 0,
//       20: 0
//   }
//   for (let i = 0; i < bills.length; i++) {
//       if (bills[i] === 5) {
//           cash[5] = cash[5] + 1
//       } else if (bills[i] === 10 && cash[5] > 0) {
//           cash[5] = cash[5] - 1
//           cash[10] = cash[10]  + 1
//       } else if (bills[i] === 20 && cash[10] > 0 && cash[5] > 0) {
//           cash[20] = cash[20] + 1
//           cash[10] = cash[10] - 1
//           cash[5] = cash[5] - 1
//       } else if (bills[i] === 20 && cash[5] >= 3) {
//           cash[20] = cash[20] + 1
//           cash[5] = cash[5] - 3
//       }
//       else return false
//       console.log('iteration ', i, ': ', cash)
//   }
//   return true
// };

// NESTED IF/ELSE

// var lemonadeChange = function(bills) {
//   let register = {
//      5: 0,
//      10: 0,
//      20: 0
//    }
//     for(let i=0; i < bills.length; i++){
//       if(bills[i]===5){
//         register[5] = register[5] + 1
//       }
//       if(bills[i]===10){
//         if(register[5] < 1){
//           return false
//         } else {
//           register[10] = register[10] + 1
//           register[5] = register[5] - 1
//         }
//       }
//       if(bills[i]===20){
//         if(register[5]===0  || (register[10] < 1 && register[5] < 1) ||        (register[10]===0 && register[5]<3)){
//               return false
//         } else {
//           register[20] = register[20] + 1
//           if(register[10] >= 1){
//             register[10] = register[10] - 1
//             register[5] = register[5] - 1
//           } else {
//             register[5] = register[5] - 3
//           }
//         }
//       }
//     }
//     return true
//   };
