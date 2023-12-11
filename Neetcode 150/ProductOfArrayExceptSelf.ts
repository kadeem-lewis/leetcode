function productExceptSelf(nums: number[]): number[] {
  const results = new Map();

  for (let i = 0; i < nums.length; i++) {
    let total = 1;
    let tempArray = nums.filter((item, index) => index !== i);
    for (const item of tempArray) {
      total = total * item;
    }
    results.set(i, total);
  }
  return Array.from(results.entries()).map((x) => x[1]);
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([0, 0]));
console.log(productExceptSelf([1, -1]));
