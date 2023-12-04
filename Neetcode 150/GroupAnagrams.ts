function groupAnagrams(strs: string[]): string[][] {
  const sortedValues = new Map();
  for (const string of strs) {
    let sorted = string.split("").sort().join("");
    if (!sortedValues.has(sorted)) sortedValues.set(sorted, []);
    sortedValues.get(sorted).push(string);
  }

  return Array.from(sortedValues.values());
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
