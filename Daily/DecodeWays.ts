//12-24-2023
function numDecodings(s: string): number {
  //go through array, if 1 element meets criteria then add it to a array and also add it to a variable
  //next loop add individual to array and append it to variable if variable is valid add to loop
  //individual cant be immediately added
  const valid: string[] = [];
  let currentNum = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0 && Number(s.charAt(i)) !== 0) {
      valid.push(s.charAt(i));
    }
    if (Number(s.charAt(i)) > 0 && Number(s.charAt(i)) < 26) {
      if (!Number(s.charAt(i - 1))) {
      } else {
        if (Number(s.charAt(i - 1)) !== 0) {
        }
      }
      currentNum = currentNum + s.charAt(i);
    }
  }
  console.log(valid);
  return valid.length;
}

console.log(numDecodings("12")); // 2
console.log(numDecodings("226")); // 3
console.log(numDecodings("06")); // 0
