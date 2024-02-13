let userInput = prompt("Enter a number");

let sum = 0;
for (let i=userInput.length-1; i>=0; i--){
    sum = Number(userInput[i])+sum;
}
console.log(sum)