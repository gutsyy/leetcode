import { test, expect } from "vitest";

function leadingZeros(x: number) {
  if (x === 0) return 32;

  const binaryString = x.toString(2);

  return 32 - binaryString.length;
}

function minEnd(n: number, x: number) {
  const bitCount = 64 - leadingZeros(x) - leadingZeros(n);

  let res = BigInt(x);

  n--;

  let j = 0;

  for (let i = 0; i < bitCount; i++) {
    if (((res >> BigInt(i)) & 1n) === 0n) {
      if (((BigInt(n) >> BigInt(j)) & 1n) !== 0n) {
        res |= 1n << BigInt(i);
      }
      j++;
    }
  }

  return Number(res);
}

test("example", () => {
  expect(minEnd(3, 4)).toBe(6);
  expect(minEnd(2, 7)).toBe(15);
  expect(minEnd(6715154, 7193485)).toBe(55012476815);
});
