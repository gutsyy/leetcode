import { test, expect } from "vitest";

function countCharacters(words: string[], chars: string): number {
  const isRecognize = (word: string) => {
    let _chars: string = chars;
    for (const char of word) {
      const searchIndex = _chars.indexOf(char);

      if (searchIndex === -1) return false;

      _chars = `${_chars.slice(0, searchIndex)}${_chars.slice(searchIndex + 1)}`;
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
