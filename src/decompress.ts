/**
 * 
 * Your input is a compressed string of the format number[string] and the decompressed output form should be the string written number times. For example:

The input

3[abc]4[ab]c

Would be output as

abcabcabcababababc

Other rules
Number can have more than one digit. For example, 10[a] is allowed, and just means aaaaaaaaaa

One repetition can occur inside another. For example, 2[3[a]b] decompresses into aaabaaab

Characters allowed as input include digits, small English letters and brackets [ ].

Digits are only to represent amount of repetitions.

Letters are just letters.

Brackets are only part of syntax of writing repeated substring.

Input is always valid, so no need to check its validity.

Learning objectives
This question gives you the chance to practice with strings, recursion, algorithm, compilers, automata, and loops. It’s also an opportunity to work on coding with better efficiency.
 */
function decomp(text: string, start: number, times: number): { decoded: string; index: number } {
  let result = '';
  let subResult = '';
  let i = start;
  let part = '';

  let subTimes = 0;
  while (i < text.length && text[i] !== ']') {
    let currentChar = text[i];
    if (currentChar >= 'a' && currentChar <= 'z') {
      part += currentChar;
      result += currentChar;
      i++;
    } else if (!isNaN(Number(currentChar))) {
      subTimes = 0;
      let newTimes = 0;
      while (!isNaN(Number(currentChar))) {
        newTimes = 10 * subTimes + parseInt(currentChar);
        i++;
        subTimes++;
        currentChar = text[i];
      }
      i++;
      const { decoded, index } = decomp(text, i, newTimes);
      result += decoded;
      i = index;
    } else {
      return { decoded: 'Input not valid', index: 0 };
    }
  }
  i++;
  subResult = result;

  if (times === 0) {
    result = '';
  } else {
    for (let j = 1; j < times; j++) {
      result += subResult;
    }
  }

  return { decoded: result, index: i };
}

export function decompress(text: string) {
  const { decoded } = decomp(text, 0, 1);
  return decoded;
}
