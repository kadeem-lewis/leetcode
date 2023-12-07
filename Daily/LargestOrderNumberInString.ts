//12-7-2023
function largestOddNumber(num: string): string {
  let len = num.length;
  for (let i = 0; i < len; i++) {
    if (Number(num.charAt(num.length - 1)) % 2 === 1) return num;
    num = num.slice(0, -1);
  }
  return "";
}

console.log(largestOddNumber("52"));
console.log(largestOddNumber("4206"));
console.log(largestOddNumber("35427"));
