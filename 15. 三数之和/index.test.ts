import { test, expect } from "vitest";

function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  let res: number[][] = [];

  const sortNums = nums.sort((a, b) => a - b);

  let curr = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < sortNums.length; i++) {
    if (sortNums[i] > curr) {
      let left = i + 1;

      let right = sortNums.length - 1;

      let selectedLeftNum = Number.MIN_SAFE_INTEGER;

      while (left < right) {
        const total = sortNums[i] + sortNums[left] + sortNums[right];

        if (total > 0) {
          right--;
          continue;
        }

        if (total === 0 && sortNums[left] !== selectedLeftNum) {
          selectedLeftNum = sortNums[left];
          res.push([sortNums[i], sortNums[left], sortNums[right]]);
        }

        left++;
      }

      curr = sortNums[i];
    }
  }

  return res;
}

function areTripletsEqual(triplet1: number[], triplet2: number[]): boolean {
  // 将两个数组排序，然后进行比较
  const sortedTriplet1 = triplet1.slice().sort();
  const sortedTriplet2 = triplet2.slice().sort();

  return JSON.stringify(sortedTriplet1) === JSON.stringify(sortedTriplet2);
}

test("examples", () => {
  const testFn = (nums: number[], res: number[][]) => {
    const testRes = threeSum(nums);
    expect(
      testRes.every((array) => res.some((t) => areTripletsEqual(t, array))) &&
        res.length === testRes.length,
    ).toBeTruthy();
  };

  testFn(
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  );

  testFn([0, 0, 0], [[0, 0, 0]]);

  testFn(
    [-1, 0, 1, 2, -1, -4],
    [
      [-1, -1, 2],
      [-1, 0, 1],
    ],
  );
  testFn([0, 0, 0, 0], [[0, 0, 0]]);
});
