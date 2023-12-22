function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];
  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }

  console.log(result);

  product = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([5, 6, 7]));

// first solution
// function getArrayProduct(nums: number[]): number {
//   return nums.reduce((acc, cur) => {
//     return (acc *= cur);
//   }, 1);
// }

// function productExceptSelf(nums: number[]): number[] {
//   const numsProduct = getArrayProduct(nums);

//   return nums.map((num, i) => {
//     if (num === 0) {
//       return getArrayProduct(nums.filter((_, j) => j !== i));
//     }

//     return numsProduct / num;
//   });
// }
