import { test, expect } from "vitest";

function sumDigitDifferences(nums: number[]): number {
  const calDiff = (num1: number, num2: number) => {
    const str1 = num1.toString();

    const str2 = num2.toString();

    let res = 0;

    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        res++;
      }
    }

    return res;
  };

  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const diffNum = calDiff(nums[i], nums[j]);
      res += diffNum;
    }
  }

  return res;
}

test("examples", () => {
  expect(sumDigitDifferences([13, 23, 12])).toBe(4);
  expect(sumDigitDifferences([10, 10, 10, 10])).toBe(0);
  expect(sumDigitDifferences([824, 843, 837, 620, 836, 234, 276, 859])).toBe(
    67,
  );
});
