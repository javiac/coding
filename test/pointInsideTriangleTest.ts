// eslint-disable-next-line import/order
import { expect } from 'chai';
import { pointInsideTriangle } from '../src/pointInsideTriangle';

describe('Check point inside triangle', function () {
    it('should return true', async function () {
        expect(pointInsideTriangle(0, 4, 2, 0, 3, 4, -2, 5)).to.equal(true);
    });

    it('should return false', async function () {
        expect(pointInsideTriangle(0, 5, 2, 0, 3, 4, -2, 5)).to.equal(false);
    });
});
