function doubleAndReturnArgs(arr, ...args) {
  // Double each of the additional arguments
  const doubledArgs = args.map(arg => arg * 2);
  // Return a new array combining the original array and the doubled arguments
  return [...arr, ...doubledArgs];
}

// Example usage:
const result = doubleAndReturnArgs([1, 2, 3], 4, 5, 6);
console.log(result); // Output: [1, 2, 3, 8, 10, 12]
