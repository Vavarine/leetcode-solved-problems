function topKFrequent(nums: number[], k: number): number[] {
  const numberQuantityMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const currentNumberQuantity = numberQuantityMap.get(nums[i]) ?? 0;

    numberQuantityMap.set(nums[i], currentNumberQuantity + 1);
  }

  return Array.from(numberQuantityMap)
    .sort((a, b) => b[1] - a[1])
    .map(([key, value]) => key)
    .slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
