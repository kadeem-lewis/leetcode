// 12-5-2023
function numberOfMatches(n: number): number {
  let totalMatches = 0;
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      totalMatches = totalMatches + n;
    } else {
      n = (n - 1) / 2 + 1;
      totalMatches = totalMatches + n - 1;
    }
  }
  return totalMatches;
}

console.log(numberOfMatches(7));
console.log(numberOfMatches(14));
console.log(numberOfMatches(17));
