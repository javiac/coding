/**
 * The old song declares "Go ahead and hate your neighbor", and the residents of Onetinville have taken those words to heart. Every resident hates his next-door neighbors on both sides. Nobody is willing to live farther away from the town's well than his neighbors, so the town has been arranged in a big circle around the well. Unfortunately, the town's well is in disrepair and needs to be restored. You have been hired to collect donations for the Save Our Well fund.
 * Each of the town's residents is willing to donate a certain amount, as specified in the int[] donations, which is listed in clockwise order around the well. However, nobody is willing to contribute to a fund to which his neighbor has also contributed. Next-door neighbors are always listed consecutively in donations, except that the first and last entries in donations are also for next-door neighbors. You must calculate and return the maximum amount of donations that can be collected.
 */

export function maxDonationsRecurrent(donations: number[]) {
  return g(donations.length - 1, donations, []);
}

function g(i: number, donations: number[], includedNeighbours: number[]): number {
  if (i === -1) {
    return 0;
  } else {
    const distance = Math.min(
      ...includedNeighbours.map((j) => {
        const d = Math.abs(i - j);
        return d === donations.length - 1 ? 1 : d;
      }),
    );
    if (distance === 1) {
      return g(i - 1, donations, includedNeighbours);
    } else {
      return Math.max(g(i - 1, donations, includedNeighbours), g(i - 1, donations, [...includedNeighbours, i]) + donations[i]);
    }
  }
}
