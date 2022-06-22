// eslint-disable-next-line import/order
import { expect } from 'chai';
import { maxDonationsRecurrent } from '../src/maxDonationsRecurrent';

describe('Maximum donations recurrent', function () {
  it('should return 19', async function () {
    expect(maxDonationsRecurrent([10, 3, 2, 5, 7, 8])).to.equal(19);
  });

  it('should return 15', async function () {
    expect(maxDonationsRecurrent([11, 15])).to.equal(15);
  });

  it('should return 21', async function () {
    expect(maxDonationsRecurrent([7, 7, 7, 7, 7, 7, 7])).to.equal(21);
  });

  it('should return 16', async function () {
    expect(maxDonationsRecurrent([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])).to.equal(16);
  });

  it('should return 2926', async function () {
    expect(
      maxDonationsRecurrent([
        94, 40, 49, 65, 21, 21, 106, 80, 92, 81, 679, 4, 61, 6, 237, 12, 72, 74, 29, 95, 265, 35,
        47, 1, 61, 397, 52, 72, 37, 51, 1, 81, 45, 435, 7, 36, 57, 86, 81, 72,
      ]),
    ).to.equal(2926);
  });
});
