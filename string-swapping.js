
let input = prompt("Enter a string:");
console.log(input)
let firstChar = input[0];
let lastChar = input[input.length - 1];
let i;
let swappedStr = "";

for ( i = 1; i < input.length - 1; i++) {
  swappedStr = swappedStr + input[i];
}

console.log(swappedStr)
swappedStr = lastChar + swappedStr + firstChar;

console.log("Swapped string:", swappedStr);


