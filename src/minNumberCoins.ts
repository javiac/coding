export function minNumberCoins(s: number, v: number[]) {
  const min: { [sum: string]: number } = { 0: 0 };

  for (let i = 1; i <= s; i++) {
    for (let value of v) {
      if (
        value <= i &&
        ((min[i - value] ?? Infinity) + 1 < min[i] || min[i] === undefined)
      ) {
        min[i] = min[i - value] + 1;
      }
    }
  }

  return min[s];
}
