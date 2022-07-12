// eslint-disable-next-line import/order
import { expect } from 'chai';
import { code } from '../src/code';

describe('Code test', function () {
  it('should return 0', async function () {
    expect(code()).to.equal(0);
  });
});
