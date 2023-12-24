function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const results: number[][] = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let leftPointer = i + 1;
    let rightPointer = nums.length - 1;

    while (leftPointer < rightPointer) {
      const sum = nums[i] + nums[leftPointer] + nums[rightPointer];

      if (sum < 0) leftPointer++;
      if (sum > 0) rightPointer--;

      if (sum === 0) {
        results.push([nums[i], nums[leftPointer], nums[rightPointer]]);
        leftPointer++;
        rightPointer--;

        while (leftPointer < rightPointer && nums[leftPointer] === nums[leftPointer - 1])
          leftPointer++;
        while (leftPointer < rightPointer && nums[rightPointer] === nums[rightPointer + 1])
          rightPointer--;
      }
    }
  }

  return results;
}

// first solution
// function threeSum(nums: number[]): number[][] {
//   const results = new Set<string>();
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length; i++) {
//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;

//     while (true) {
//       if (leftPointer === i) leftPointer++;
//       if (rightPointer === i) rightPointer--;

//       if (leftPointer >= rightPointer) break;

//       const result = nums[leftPointer] + nums[rightPointer] + nums[i];

//       if (result === 0) {
//         results.add(
//           JSON.stringify([nums[leftPointer], nums[rightPointer], nums[i]].sort((a, b) => a - b))
//         );

//         rightPointer--;
//         leftPointer++;
//       }

//       if (result > 0) rightPointer--;
//       if (result < 0) leftPointer++;
//     }
//   }

//   return Array.from(results).map((item) => JSON.parse(item));
// }

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]));
