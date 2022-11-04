// Given an integer x, return true if x is a palindrome, and false otherwise. 

// Example 

// Input: x = -121 
// Output: false 
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore, it is not a palindrome. 


function palindrome(str) {
   
    let len = str.length;
    for (let i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return true;
      }
    }
    return false;
   }
   console.log(palindrome(-121));