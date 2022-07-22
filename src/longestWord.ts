/**
 * 
 * Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.

Note: D can appear in any format (list, hash table, prefix tree, etc.

For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"

The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".
The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.
The word "kangaroo" is the longest word in D, but it isn't a subsequence of S.
 * @param D 
 * @returns 
 */

export function longestWord(S: string, ...D: string[]): string | undefined {
  const wordMap: { [word: string]: number } = {};
  for (let word of D) {
    wordMap[word] = word.length;
  }

  return findLongestWord(S, wordMap);
}

function findLongestWord(S: string, D: { [word: string]: number }): string | undefined {
  if (S.length === 0) {
    return undefined;
  }
  if (D[S]) {
    return S;
  }

  let result;
  for (let i = 0; i < S.length; i++) {
    const word = findLongestWord(S.slice(0, i) + S.slice(i + 1, S.length), D);
    if (word && (!result || word.length > result.length)) {
      result = word;
    }
  }

  return result;
}
