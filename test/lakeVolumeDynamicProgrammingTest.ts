// eslint-disable-next-line import/order
import { expect } from 'chai';
import { lakeVolumeDynamicProgramming } from '../src/lakeVolumeDynamicProgramming';

describe('Lake volume dynamic programming test', function () {
  it('should return 15', async function () {
    expect(lakeVolumeDynamicProgramming([1, 3, 2, 4, 1, 3, 1, 4, 5, 2, 2, 1, 4, 2, 2])).to.equal(15);
  });
});
