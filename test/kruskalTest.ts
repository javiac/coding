// eslint-disable-next-line import/order
import { expect } from 'chai';
import { kruskal } from '../src/kruskal';

describe('Kruskal', function () {
  it('should return AGM', async function () {
    const L = [
      [Infinity, 2, 1, 4, 3, 5, Infinity],
      [2, Infinity, Infinity, 7, Infinity, 2],
      [1, Infinity, Infinity, Infinity, 4, 4, Infinity],
      [4, 7, Infinity, Infinity, 1, Infinity, 5],
      [3, Infinity, 4, 1, Infinity, Infinity, 7],
      [5, 2, 4, Infinity, Infinity, Infinity, Infinity],
      [Infinity, Infinity, Infinity, 5, 7, Infinity, Infinity],
    ];

    const result = kruskal(L, [
      [0, 1],
      [0, 2],
      [0, 3],
      [0, 4],
      [3, 4],
      [3, 6],
      [4, 6],
      [1, 3],
      [2, 4],
      [2, 5],
      [1, 5],
      [0, 5],
    ]);
    expect(toString(result)).to.equal(
      toString([
        [0, 2],
        [0, 1],
        [1, 5],
        [0, 4],
        [4, 3],
        [3, 6],
      ]),
    );
  });
});

function toString(links: number[][]) {
  return links
    .map((a) => {
      a.sort();
      return `${a[0]}${a[1]}`;
    })
    .sort()
    .join();
}
