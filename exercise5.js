// **Comparison Operators Exercises**

// These exercises are aimed at making you familiar with the comparison operators. **Print all your checks to the console.**

// Declare two variables "x" and "y". Assign a value of 20 to x. Assign a value of 30 to y.

let x = 20;
let y = 30;

// 1. Check whether x and y are equal. 
console.log("1: " + (x == y));

// 2. Check whether x and y are **not** equal. 
console.log("2: " + (x != y));

// 3. Check whether x is greater than y. 
console.log("3: " + (x > y));

// 4. Check whether x is less than or equal to y. 
console.log("4: " + (x <= y));

// 5. Check whether y is greater than x. 
console.log("5: " + (y > x));

// 6. Declare another variable "z" and give it a value of 5. Multiply z and x and, check whether this result is greater than z added to y. 
let z = 5;
console.log("6: " + ((z * x) > (z + y)));

// 7. Subtract z from x and check whether this result is less than y divided by z. 
console.log("7: " + ((x - z) < (y / z)));

// 8. Check whether z, x and y are equal. 
console.log("8: " + ((z === x) && (z === y) && (x === y)));

// 9. Check whether the remainder of x divided by z and the remainder of y divided by z are equal.
console.log("9: " + ((x % z) === (y % z)));

// 10. Check whether z added to x is greater than y minus z. If it is not, find an operator which will give a result of true. 
console.log("10: " + ((z + x) > (y - z)));
console.log("10: " + !((z + x) > (y - z)));
