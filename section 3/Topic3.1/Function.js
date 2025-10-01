function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}
function greetUser(name) {
  return `Hello, ${name}!`;
}
function simulateFileWrite(content) {
  console.log("Pretending to write to a file...");
  console.log("Saved content:", content);
}
const sum = add(10, 5);
const difference = subtract(10, 5);
const greeting = greetUser("Marwan");

console.log("Sum:", sum);
console.log("Difference:", difference);
console.log(greeting);

simulateFileWrite(`Summary:\n${greeting}\nSum: ${sum}\nDifference: ${difference}`);