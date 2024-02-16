let arrayOfNumbers = [5, 6, 8, 10, 15];

// console.log(arrayOfNumbers.length);

let sum = 0;

for (let i = 0; i <= arrayOfNumbers.length - 1; i++){

    sum = arrayOfNumbers[i] + sum;
}
// console.log(sum)

let average = sum / arrayOfNumbers.length;
console.log(average);