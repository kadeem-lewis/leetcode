//12-11-2023

function findSpecialInteger(arr: number[]): number {
  const elementCount = new Map();

  for (const num of arr) {
    elementCount.set(
      num,
      elementCount.get(num) ? elementCount.get(num) + 1 : 1
    );
  }
  for (const [key, value] of elementCount) {
    if (value / arr.length > 0.25) return key;
  }
  return -1;
}

console.log(findSpecialInteger([1, 2, 2, 6, 6, 6, 6, 7, 10]));
console.log(findSpecialInteger([1, 1]));
