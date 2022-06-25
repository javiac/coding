import { quicksortCompareFunc } from './quicksortCompareFunct';

export function kruskal(L: number[][], links: number[][]) {
  const result = [];
  const linksSorted = quicksortCompareFunc(links, (a, b) => {
    if (L[a[0]][a[1]] < L[b[0]][b[1]]) {
      return 1;
    } else if (L[a[0]][a[1]] < L[b[0]][b[1]]) {
      return -1;
    } else {
      return 0;
    }
  });

  const sets: Set<number>[] = [];
  for (let i = 0; i < L.length; i++) {
    sets[i] = new Set([i]);
  }

  for (let link of linksSorted) {
    let setA: Set<number> = new Set();
    let setB: Set<number> = new Set();
    let indexSetA: number | undefined = undefined;
    let indexSetB: number | undefined = undefined;

    for (let i = 0; i < sets.length; i++) {
      if (sets[i].has(link[0])) {
        setA = sets[i];
        indexSetA = i;
      }

      if (sets[i].has(link[1])) {
        setB = sets[i];
        indexSetB = i;
      }
    }

    const valuesSetA = [...setA.values()];
    const valuesSetB = [...setB.values()];

    if (indexSetA !== undefined && indexSetB !== undefined && valuesSetA.join() !== valuesSetB.join()) {
      sets[indexSetA] = new Set(valuesSetA.concat(valuesSetB));
      sets[indexSetB] = new Set();
      result.push(link);
    }

    if (result.length === L.length - 1) {
      break;
    }
  }

  return result;
}
