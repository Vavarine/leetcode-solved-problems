function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const curNum = nums[i];

    if (set.has(curNum)) return true;

    if (set.size === k) {
      set.delete(nums[i - k]);
    }

    set.add(curNum);
  }

  return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
