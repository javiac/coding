export function quicksortCompareFunc<T = any>(values: T[], compareFunc: (a: T, b: T) => 1 | -1 | 0): T[] {
  if (values.length < 2) {
    return values;
  }

  const pivotIndex = pivot(values, compareFunc);
  const part1 = values.slice(0, pivotIndex === 0 ? 1 : pivotIndex);
  const part2 = values.slice(pivotIndex === 0 ? 1 : pivotIndex, values.length);

  const part1Sorted = quicksortCompareFunc(part1, compareFunc);
  const part2Sorted = quicksortCompareFunc(part2, compareFunc);
  return part1Sorted.concat(part2Sorted);
}

function pivot<T = any>(values: T[], compareFunc: (a: T, b: T) => 1 | -1 | 0) {
  let pivot = values[0];
  if (compareFunc(values[0], values[1]) === 1) {
    pivot = values[1];
  }

  let i = 0;
  let j = values.length - 1;

  while (i < j) {
    while (compareFunc(values[i], pivot) === 1 && i <= j) {
      i++;
    }

    while (compareFunc(values[j], pivot) !== 1 && i < j) {
      j--;
    }
    const temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }

  return i;
}
