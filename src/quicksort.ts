export function quicksort(values: number[]): number[] {
  if (values.length < 2) {
    return values;
  }

  const pivotIndex = pivot(values);
  const part1 = values.slice(0, pivotIndex === 0 ? 1 : pivotIndex);
  const part2 = values.slice(pivotIndex === 0 ? 1 : pivotIndex, values.length);

  const part1Sorted = quicksort(part1);
  const part2Sorted = quicksort(part2);
  return part1Sorted.concat(part2Sorted);
}

function pivot(values: number[]) {
  const pivot = Math.max(values[0], values[1]);

  let i = 0;
  let j = values.length - 1;

  while (i < j) {
    while (values[i] < pivot && i <= j) {
      i++;
    }

    while (values[j] >= pivot && i < j) {
      j--;
    }
    const temp = values[i];
    values[i] = values[j];
    values[j] = temp;
  }

  return i;
}
