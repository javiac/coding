/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *    1 - Open brackets must be closed by the same type of brackets.
 *    2 - Open brackets must be closed in the correct order.
 *
 *  Examples:
 *
 *  Input: s = "()"
 *  Output: true
 *
 *  Input: s = "()[]{}"
 *  Output: true
 *
 *  Input: s = "(]"
 *  Output: false
 *
 *  Input: s = "([)]"
 *  Output: false
 *
 *  Input: s = "{[]}"
 *  Output: true
 *
 */
const openingCharacters: { [key: string]: string } = {
  ']': '[',
  '}': '{',
  ')': '(',
};
const isValid = (s: string) => {
  // Logic here
  console.log(s);
  const stack: string[] = [];
  for (let character of s) {
    if (['[', '{', '('].includes(character)) {
      stack.unshift(character);
    } else {
      if (stack.length > 0) {
        if (openingCharacters[character] === stack[0]) {
          stack.shift();
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};
isValid('()');
