//06-01-2024

function singleNumber(nums: number[]): number[] {
  let answer: number[] = [];
  let uniqueNums = new Map();
  for (let num of nums) {
    uniqueNums.set(
      num,
      uniqueNums.has(num) ? uniqueNums.set(num, uniqueNums.get(num) + 1) : 1
    );
  }
  for (let [key, value] of uniqueNums) {
    if (value === 1) answer.push(key);
  }
  return answer;
}

// Runtime 61ms || Beats 72.13% of TS Users
// 55.29mb Memory || Beats 13.12% of users with Typescript
