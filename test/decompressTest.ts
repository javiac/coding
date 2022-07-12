// eslint-disable-next-line import/order
import { expect } from 'chai';
import { decompress } from '../src/decompress';

describe('Decompress', function () {
  it('should return abcabcabcababababc', async function () {
    expect(decompress('3[abc]4[ab]c')).to.equal('abcabcabcababababc');
  });

  it('should return aaaaaaaaaa', async function () {
    expect(decompress('10[a]')).to.equal('aaaaaaaaaa');
  });

  it('should return aaabaaab', async function () {
    expect(decompress('2[3[a]b]')).to.equal('aaabaaab');
  });

  it('should return Input not valid', async function () {
    expect(decompress('a[]b')).to.equal('Input not valid');
  });

  it('should return empty', async function () {
    expect(decompress('0[abc]')).to.equal('');
  });
});
