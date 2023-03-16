function longestNonRepeatingWord(s) {
    const state = [1]
    const stateMap = [{ [s[0]]: true }];
    let result = 1;
    // Type your solution here
    for (let i = 1; i < s.length; i++) {
        state[i] = 1;
        stateMap[i] = { [s[i]]: true };

        if (!stateMap[i - 1][s[i]]) {
            state[i] = state[i - 1] + 1;
            stateMap[i] = { ...stateMap[i - 1], [s[i]]: true }
        } else if (s[i] !== s[i - 1]) {
            state[i] = 2;
            stateMap[i][s[i - 1]] = true;
        }

        result = Math.max(result, state[i]);
    }

    return result;
};

console.log(longestNonRepeatingWord('abcd'));
console.log(longestNonRepeatingWord('abcc'));
console.log(longestNonRepeatingWord('abccabcdefgabc'));
console.log(longestNonRepeatingWord('abcc'));