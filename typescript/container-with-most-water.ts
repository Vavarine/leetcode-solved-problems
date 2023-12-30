function maxArea(height: number[]): number {
  let result = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    result = Math.max(result, Math.min(height[left], height[right]) * (right - left));

    if (height[left] > height[right]) {
      right--;
    } else if (height[left] < height[right]) {
      left++;
    } else {
      left++;
      right--;
    }
  }

  return result;
}

console.log(maxArea([1, 3, 2, 5, 25, 24, 5]));

// First solution
// function maxArea(height: number[]): number {
//   let result = 0;

//   for (let i = 0; i < height.length; i++) {
//     for (let j = i + 1; j < height.length; j++) {
//       const currentResult = Math.min(height[i], height[j]) * (j - i);

//       if (currentResult > result) result = currentResult;
//     }
//   }

//   return result;
// }
