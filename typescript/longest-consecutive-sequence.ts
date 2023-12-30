function longestConsecutive(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const set = new Set(nums);
  const sortedUniqueArr = Array.from(set);

  const map = new Map<number, number>();
  let sequence = 1;

  for (let i = 0; i < sortedUniqueArr.length; i++) {
    const count = map.get(sequence) ?? 0;

    map.set(sequence, count + 1);

    if (sortedUniqueArr[i] + 1 !== sortedUniqueArr[i + 1]) {
      sequence++;
    }
  }

  return Array.from(map).sort((a, b) => b[1] - a[1])?.[0]?.[1] ?? 0;
}

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));
console.log(longestConsecutive([1, 2, 0, 1]));
