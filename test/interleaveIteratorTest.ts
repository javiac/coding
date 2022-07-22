// eslint-disable-next-line import/order
import { expect } from 'chai';
import { InterleaveIterator } from '../src/InterleaveIterator';

describe('Decompress', function () {
  it('should return 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16', async function () {
    const a = [1, 4, 7, 10];
    const b = [2, 5, 8, 11, 13];
    const c = [3, 6, 9, 12, 14, 15, 16];

    const iterators = [a[Symbol.iterator](), b[Symbol.iterator](), c[Symbol.iterator]()];
    const interleaveIterator = new InterleaveIterator(iterators);
    const result = [];
    while (interleaveIterator.hasNext()) {
      result.push(interleaveIterator.next());
    }

    expect(result.toString()).to.equal('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16');
  });
});
