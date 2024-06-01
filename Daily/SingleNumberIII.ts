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
