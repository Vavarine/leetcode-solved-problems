// @deno-types="npm:@types/asciichart"
import asciichart from "npm:asciichart";

function trap(height: number[]): number {
  const set = new Set<string>();
  let result = 0;

  for (let i = 1; i < height.length; i++) {
    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && right < height.length) {
      if (height[left] > height[i] && height[right] > height[i]) {
        if (!set.has(`${right}:${left}:${height[i]}`)) {
          result += (right - left - 1) * (Math.min(height[left], height[right]) - height[i]);
        }

        set.add(`${right}:${left}:${height[i]}`);

        break;
      }

      if (height[left] <= height[i]) left--;
      if (height[right] <= height[i]) right++;
    }
  }

  return result;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
