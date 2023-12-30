// with map
function twoSum2(nums: number[], target: number): number[] {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;

  while (leftPointer !== rightPointer) {
    const result = nums[leftPointer] + nums[rightPointer];

    if (result === target) return [leftPointer + 1, rightPointer + 1];

    if (result < target) leftPointer++;
    if (result > target) rightPointer--;
  }

  return [-1, -1];
}

console.log(twoSum2([2, 7, 11, 15], 9));

// first solution
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       const sum = nums[i] + nums[j];

//       if (sum === target) return [i, j];
//     }
//   }

//   return [-1, -1];
// }
