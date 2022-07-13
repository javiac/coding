export function lakeVolumeDynamicProgramming(heights: number[]) {
  let output = 0;
  const maxLeft: number[] = [];
  const maxRight: number[] = [];

  for (let i = 0; i < heights.length; i++) {
    maxLeft[i] = Math.max(heights[i], maxLeft[i - 1] ?? 0);
    const indexRight = heights.length - 1 - i;
    maxRight[indexRight] = Math.max(heights[indexRight], maxRight[indexRight + 1] ?? 0);
  }

  for (let i = 0; i < heights.length; i++) {
    output += Math.min(maxLeft[i], maxRight[i]) - heights[i];
  }

  return output;
}
