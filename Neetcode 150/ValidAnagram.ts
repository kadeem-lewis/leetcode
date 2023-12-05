function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sortedS = s.split("").sort().join();
  const sortedT = t.split("").sort().join();

  if (sortedS !== sortedT) return false;
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
