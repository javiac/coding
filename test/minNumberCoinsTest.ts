// eslint-disable-next-line import/order
import { expect } from "chai";
import { minNumberCoins } from "../src/minNumberCoins";

describe("Minimum number of coins", function () {
  it("should return 3", async function () {
    expect(minNumberCoins(11, [1, 3, 5])).to.equal(3);
  });

  it("should return 2 given s = 30 and coins 25, 10, 5", async function () {
    expect(minNumberCoins(30, [25, 10, 5])).to.equal(2);
  });

  it("should return 3 give s = 11 and coins 9, 6, 5, 1", async function () {
    expect(minNumberCoins(11, [9, 6, 5, 1])).to.equal(2);
  });
});
