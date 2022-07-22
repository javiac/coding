// eslint-disable-next-line import/order
import { expect } from 'chai';
import { longestWord } from '../src/longestWord';

describe('Code test', function () {
  it('should return apple', async function () {
    expect(longestWord('abppplee', 'able', 'ale', 'apple', 'bale', 'kangaroo')).to.equal('apple');
  });

  it('should return abppplee', async function () {
    expect(longestWord('abppplee', 'abppplee', 'able', 'ale', 'apple', 'bale', 'kangaroo')).to.equal('abppplee');
  });

  it('should return applee', async function () {
    expect(longestWord('abppplee', 'able', 'ale', 'apple', 'bale', 'kangaroo', 'applee')).to.equal('applee');
  });

  it('should return undefined', async function () {
    expect(longestWord('', 'able', 'ale', 'apple', 'bale', 'kangaroo', 'applee')).to.equal(undefined);
  });

  it('should return l', async function () {
    expect(longestWord('abppplee', 'l')).to.equal('l');
  });

  it('should return undefined', async function () {
    expect(longestWord('abppplee', 'o')).to.equal(undefined);
  });
});
