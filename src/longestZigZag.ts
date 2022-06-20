export function longestZigZag(values: number[]) {
  const maxLength = [1];
  const lastDifference = [0];

  if (values.length > 1) {
    for (let i = 1; i < values.length; i++) {
      const value = values[i];

      maxLength[i] = 2;
      lastDifference[i] = value - values[0];

      for (let j = 1; j < i; j++) {
        const diff = value - values[j];
        if (lastDifference[j] * diff < 0 && maxLength[i] < maxLength[j] + 1) {
          maxLength[i] = maxLength[j] + 1;
          lastDifference[i] = diff;
        }
      }
    }
  }

  return maxLength.pop();
}
