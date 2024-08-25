import { test, expect } from "vitest";

function searchRange(nums: number[], target: number): number[] {
  if (!nums.length) return [-1, -1];

  let minIndex = Number.MAX_SAFE_INTEGER;

  let maxIndex = -1;

  const biSection = (startIndex: number, endIndex: number) => {
    if (startIndex > endIndex) return;

    if (nums[startIndex] < target && nums[endIndex] < target) return;

    if (nums[startIndex] > target && nums[endIndex] > target) return;

    const isEven = (startIndex + endIndex) % 2 === 0;

    if (!isEven) {
      const [left, right] = (function () {
        const index = (startIndex + endIndex + 1) / 2;

        return [index - 1, index] as const;
      })();

      if (nums[right] <= target) {
        biSection(right, endIndex);
      }
      if (nums[left] >= target) {
        biSection(startIndex, left);
      }

      return;
    }

    const midIndex = (startIndex + endIndex) / 2;

    if (nums[midIndex] === target) {
      minIndex = Math.min(minIndex, midIndex);
      maxIndex = Math.max(maxIndex, midIndex);
    }

    if (nums[midIndex] >= target && startIndex !== endIndex) {
      biSection(startIndex, midIndex);
    }

    if (nums[midIndex] <= target && startIndex !== endIndex) {
      biSection(midIndex, endIndex);
    }
  };

  biSection(0, nums.length - 1);

  return [minIndex === Number.MAX_SAFE_INTEGER ? -1 : minIndex, maxIndex];
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
