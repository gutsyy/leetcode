import { test, expect } from "vitest";

function searchRange(nums: number[], target: number): number[] {
  const biSelection = (isLeft: boolean) => {
    let low = 0,
      high = nums.length - 1,
      res = -1;

    while (low <= high) {
      const mid = Math.floor((high + low) / 2);

      if (nums[mid] === target) {
        res = mid;
        if (isLeft) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }

      if (nums[mid] > target) {
        high = mid - 1;
      }

      if (nums[mid] < target) {
        low = mid + 1;
      }
    }

    return res;
  };

  const left = biSelection(true);
  const right = biSelection(false);

  return [left, right];
}

test("examples", () => {
  const testCase = (
    nums: number[],
    target: number,
    first: number,
    second: number,
  ) => {
    const [_first, _second] = searchRange(nums, target);

    expect(_first).toBe(first);
    expect(_second).toBe(second);
  };

  testCase([5, 7, 7, 8, 8, 10], 8, 3, 4);
  testCase([5, 7, 7, 8, 8, 10], 6, -1, -1);
  testCase([], 0, -1, -1);
});
