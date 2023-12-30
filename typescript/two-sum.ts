// with map
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i];
    }

    map.set(nums[i], i);
  }

  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9));

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
