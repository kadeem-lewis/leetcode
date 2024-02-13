function firstPalindrome(words: string[]): string {
  for (let word of words) {
    console.log(word, [...word].reverse().join(""));
    if ([...word].reverse().join() === word) {
      return word;
    }
  }
  return "";
}

console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
console.log(firstPalindrome(["notapalindrome", "racecar"]));
console.log(firstPalindrome(["def", "ghi"]));

// Runtime 86ms || Beats 44.07% of TS Users
// 58.05ms Memory || Beats 6.78% of users with Typescript
