// let str = "name"; // Replace with your string

// // Destructure and swap first and last characters
// let [first, ...rest, last] = str;

// // Spread them in reversed order
// let swappedStr = [...rest, last, first].join("");

// console.log("Swapped string:", swappedStr); // Output: eamn


// Prompt the user for input
let input = prompt("Enter a string:");

// Extract first and last characters
let firstChar = input[0];
let lastChar = input[input.length - 1];

// Build the swapped string using iteration
let swappedStr = "";
for (let i = 1; i < input.length - 1; i++) {
  swappedStr += input[i];
}

// Add the swapped characters at the beginning and end
swappedStr = lastChar + swappedStr + firstChar;

// Display the result to the user
console.log("Swapped string:", swappedStr);
