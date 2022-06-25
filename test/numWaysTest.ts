// eslint-disable-next-line import/order
import { expect } from 'chai';
import { numWays } from '../src/numWays';

describe('Num ways test', function () {
  it('should return 2', async function () {
    expect(numWays(1, 1, [])).to.equal(2n);
  });

  it('should return 6406484391866534976', async function () {
    expect(numWays(35, 31, [])).to.equal(6406484391866534976n);
  });

  it('should return 252', async function () {
    expect(numWays(6, 6, ['0 0 0 1', '6 6 5 6'])).to.equal(252n);
  });

  it('should return 0', async function () {
    expect(numWays(2, 2, ['0 0 1 0', '1 2 2 2', '1 1 2 1'])).to.equal(0n);
  });
});
