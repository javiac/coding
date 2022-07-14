export function lakeVolumeStack(heights: number[]) {
  const stack: number[] = [];
  let current = 0;
  let output = 0;

  while (current < heights.length) {
    while (stack.length > 0 && heights[current] > heights[stack[stack.length - 1]]) {
      const top = stack.pop();
      if (stack.length === 0) {
        break;
      }

      const distance = current - stack[stack.length - 1] - 1;
      output += distance * (Math.min(heights[current], heights[stack[stack.length - 1]]) - heights[top!]);
    }
    stack.push(current);
    current += 1;
  }

  return output;
}
