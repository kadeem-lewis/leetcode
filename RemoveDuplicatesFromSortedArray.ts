function removeDuplicates(nums: number[]): number {
  const unique = [...new Set(nums)];
  for (let i = 0; i < unique.length; i++) {
    nums.fill(unique[i], i);
    console.log(nums);
  }
  return unique.length;
}

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
