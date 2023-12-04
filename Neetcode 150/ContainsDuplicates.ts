function containsDuplicate(nums: number[]): boolean {
  let counts = {};
  for (const num of nums) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
    if (counts[num] === 2) return true;
  }
  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));
console.log(containsDuplicate([1, 2, 3, 1]));
