// eslint-disable-next-line import/order
import { expect } from "chai";
import { longestNonDecreasingSequence } from "../src/longestNonDecreasingSequence";

describe("Longest non decreasing sequence", function () {
  it("should return 4", async function () {
    expect(longestNonDecreasingSequence([5, 3, 4, 8, 6, 7])).to.equal(4);
  });
});
