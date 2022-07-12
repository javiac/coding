// eslint-disable-next-line import/order
import { expect } from 'chai';
import { uniquify } from '../src/uniquify';

describe('Uniquify', function () {
  it('should return 1 message_1', function () {
    expect(uniquify('message 1', 1)).to.equal('message 1');
  });

  it('should return 1 message_2', function () {
    expect(uniquify('message 2', 1)).to.equal('message 2');
  });

  it('should return empty', function () {
    expect(uniquify('message 2', 2)).to.equal('');
  });

  it('should return message 2', function () {
    expect(uniquify('message 2', 13)).to.equal('message 2');
  });

  it('should return empty', function () {
    expect(uniquify('message 2', 14)).to.equal('');
  });
});
