function containsDuplicate(nums: number[]): boolean {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (set.has(currNum)) return true;
    set.add(currNum);
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 4]));
