function topKFrequent(nums: number[], k: number): number[] {
  const frequencyTable = new Map();
  for (const num of nums) {
    if (!frequencyTable.has(num)) {
      frequencyTable.set(num, 1);
    } else {
      frequencyTable.set(num, frequencyTable.get(num) + 1);
    }
  }

  return Array.from(frequencyTable.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((a) => a[0]);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
//additional test case
console.log(topKFrequent([1, 2, 3, 1, 1, 2, 3, 4, 1, 2, 2, 3, 2, 2, 3, 4], 2));
