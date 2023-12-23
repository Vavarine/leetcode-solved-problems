function containsNearbyAlmostDuplicate(
  nums: number[],
  indexDiff: number,
  valueDiff: number
): boolean {
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j <= i + indexDiff && j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= valueDiff) return true;
    }
  }

  return false;
}
