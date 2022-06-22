export function longestNonDecreasingSequence(values: number[]) {
  const state: number[] = [1];

  values.forEach((value, i) => {
    state[i] = 1;
    for (let j = 0; j < i; j++) {
      if (values[j] < value && (state[i] === undefined || state[j] + 1 > state[i])) {
        state[i] = state[j] + 1;
      }
    }
  });

  return state.pop();
}
