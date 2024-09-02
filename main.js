// const: value will not change
// let: value can change
// var: we showed not use it

// variable
let amount = 92;

//condition
if (amount > 100) {
} else {
}

// array
const numbers = [1, 2342, 54, 32];
console.log(numbers);

// loop
// for loop
for (const num of numbers) {
  console.log(num);
}

const fruits = ["orange", "apple", "banana"];
for (const fruit of fruits) {
  console.log(fruit);
}

// while loop
const number = 5;
if (number < 10) {
  console.log("choto ekta number paisi");
}
console.log("something new is cooing");

// while loop
let num = 0;
while (num < 5) {
  console.log("looping", num);
  num++;
}

// range
let rangeNum = 1;
let sum = 0;
while (rangeNum <= 10) {
  console.log("Number:", rangeNum);
  sum = sum + rangeNum;
  rangeNum++;
}
console.log("Total: ", sum);

sum = 0;
rangeNum = 50;
while (rangeNum <= 100) {
  console.log("Number:", rangeNum);
  sum = sum + rangeNum;
  rangeNum++;
}
console.log("Total: ", sum);

// even number
let i = 1;
while (i <= 10) {
  if (i % 2 == 0) {
    console.log("even number: ", i);
  }
  i++;
}

// for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
