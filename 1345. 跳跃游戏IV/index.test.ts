import { test, expect } from "vitest";

function minJumps(arr: number[]): number {
  if (arr.length === 1) return 0;

  if (arr[0] === arr[arr.length - 1]) return 1;

  const map = new Map<number, number[]>(); // <value, index[]>

  for (let i = 0; i < arr.length; i++) {
    const key = arr[i];

    if (!map.has(key)) {
      map.set(key, []);
    }

    map.get(key)!.push(i);
  }

  let startQueue = new Set([0]);

  let endQueue = new Set([arr.length - 1]);

  let startUsed = new Set([0]);

  let endUsed = new Set([arr.length - 1]);

  let steps = 0;

  while (startQueue.size > 0) {
    if (startQueue.size > endQueue.size) {
      [startQueue, endQueue] = [endQueue, startQueue];
      [startUsed, endUsed] = [endUsed, startUsed];
    }

    const { size } = startQueue;

    const queue = Array.from(startQueue);

    for (let i = 0; i < size; i++) {
      const curr = queue.shift()!;

      startQueue.delete(curr);

      if (endQueue.has(curr)) return steps;

      for (const k of [curr - 1, curr + 1]) {
        if (k > 0 && k < arr.length && !startUsed.has(k)) {
          startUsed.add(k);
          startQueue.add(k);
        }
      }

      const valueAsKey = arr[curr]; // value as key

      if (map.has(valueAsKey)) {
        for (const j of map.get(valueAsKey)!) {
          if (!startUsed.has(j)) {
            startUsed.add(j);
            startQueue.add(j);
          }
        }
        map.delete(valueAsKey);
      }
    }

    steps++;
  }

  return -1;
}

test("examples", () => {
  expect(minJumps([100, -23, -23, 404, 100, 23, 23, 23, 3, 404])).toBe(3);
  expect(minJumps([7, 6, 9, 6, 9, 6, 9, 7])).toBe(1);
  expect(minJumps([7])).toBe(0);
});
