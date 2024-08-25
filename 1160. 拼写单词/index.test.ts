import { test, expect } from "vitest";

function countCharacters(words: string[], chars: string): number {
  const charsMap = {};

  for (const c of chars) {
    if (charsMap[c]) {
      charsMap[c] += 1;
    } else {
      charsMap[c] = 1;
    }
  }

  const isRecognize = (word: string) => {
    const clonedMap = { ...charsMap };
    for (const char of word) {
      if (!clonedMap[char]) return false;

      clonedMap[char] -= 1;
    }

    return true;
  };

  let res = 0;

  for (const word of words) {
    if (isRecognize(word)) res += word.length;
  }

  return res;
}

test("example", () => {
  expect(countCharacters(["cat", "bt", "hat", "tree"], "atach")).toBe(6);
  expect(
    countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"),
  ).toBe(10);
  expect(
    countCharacters(
      [
        "dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin",
        "ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb",
        "ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl",
        "boygirdlggnh",
        "xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx",
        "nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop",
        "hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx",
        "juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr",
        "lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo",
        "oxgaskztzroxuntiwlfyufddl",
        "tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp",
        "qnagrpfzlyrouolqquytwnwnsqnmuzphne",
        "eeilfdaookieawrrbvtnqfzcricvhpiv",
        "sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz",
        "yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue",
        "hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv",
        "cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo",
        "teyygdmmyadppuopvqdodaczob",
        "qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs",
        "qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs",
      ],
      "usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp",
    ),
  ).toBe(0);
});
