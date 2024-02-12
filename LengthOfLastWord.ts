function lengthOfLastWord(s: string): number {
  const sArray = s.split(" ").filter((x) => x !== "");
  return sArray[sArray.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("luffy is still joyboy"));

// Runtime 51ms || Beats 81.92% of TS users
// Memory 51.20MB || Beats 30.44% of TS users
