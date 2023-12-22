// with Map
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, number[]>();

  for (let i = 0; i < strs.length; i++) {
    const sortedString = strs[i].split("").sort().join("");
    const indexesArr = map.get(sortedString) ?? [];

    indexesArr.push(i);

    map.set(sortedString, indexesArr);
  }

  return Array.from(map).map(([key, indexes]) => {
    return indexes.map((index) => strs[index]);
  });
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
