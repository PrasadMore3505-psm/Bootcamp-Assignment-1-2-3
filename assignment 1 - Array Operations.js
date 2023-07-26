// Objective: Practice adding, removing, and updating values in arrays.

// 1. Create an empty array called "fruits".

// 2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".

// 3. Remove the first fruit from the array.

// 4. Add "grape" to the end of the array.

// 5. Update the second fruit in the array to "pear".

// 6. Print the final "fruits" array after performing the above operations.


let fruits = ["apple","banana","orange"];


fruits.splice(0,1);

fruits.push("grape");

fruits.splice(1,0,"pear");

console.log(fruits);
