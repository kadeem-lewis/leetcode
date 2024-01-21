type Fn2 = (accum: number, curr: number) => number;

function reduce(nums: number[], fn: Fn2, init: number): number {
  let output: number = init;
  for (let i = 0; i < nums.length; i++) {
    output = fn(output, nums[i]);
  }
  return output;
}
