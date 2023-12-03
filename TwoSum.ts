function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    let missingValue = target - nums[i];
    let missingValueIndex = nums.indexOf(missingValue);
    if (missingValueIndex !== i && missingValueIndex !== -1) {
      return [i, missingValueIndex];
    }
  }
  return [0, 0];
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([3, 3], 6));
//additional test cases
console.log(twoSum([3, 2, 3], 6));
