function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function addSafe(a: any, b: any): number {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // Handle the error as needed
  }
  return numA + numB;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 5); // result2 is 5
let result3 = addSafe("5", 3); // result3 is 8
let result4 = addSafe("hello", 3); // result4 is 0

console.log(result1); // Output: 8
console.log(result2); // Output: 5
console.log(result3); // Output: 8
console.log(result4); // Output: 0