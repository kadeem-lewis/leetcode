function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sArray = [...s].sort();
  const tArray = [...t].sort();

  for (let i = 0; i < sArray.length; i++) {
    if (sArray[i] !== tArray[i]) return false;
  }
  return true;
}

console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
