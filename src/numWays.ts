/**
 * 
 * Problem contains images. Plugin users can view them in the applet.

In the city, roads are arranged in a grid pattern. Each point on the grid represents a corner where two blocks meet. The points are connected by line segments which represent the various street blocks. Using the cartesian coordinate system, we can assign a pair of integers to each corner as shown below.
You are standing at the corner with coordinates 0,0. Your destination is at corner width,height. You will return the number of distinct paths that lead to your destination. Each path must use exactly width+height blocks. In addition, the city has declared certain street blocks untraversable. These blocks may not be a part of any path. You will be given a String[] bad describing which blocks are bad. If (quotes for clarity) "a b c d" is an element of bad, it means the block from corner a,b to corner c,d is untraversable. For example, let's say
width  = 6
length = 6
bad = {"0 0 0 1","6 6 5 6"}
The picture below shows the grid, with untraversable blocks darkened in black. A sample path has been highlighted in red.
Definition
    	
Class:	AvoidRoads
Method:	numWays
Parameters:	int, int, String[]
Returns:	long
Method signature:	long numWays(int width, int height, String[] bad)
(be sure your method is public)
Constraints
-	width will be between 1 and 100 inclusive.
-	height will be between 1 and 100 inclusive.
-	bad will contain between 0 and 50 elements inclusive.
-	Each element of bad will contain between 7 and 14 characters inclusive.
-	Each element of the bad will be in the format "a b c d" where,
a,b,c,d are integers with no extra leading zeros,
a and c are between 0 and width inclusive,
b and d are between 0 and height inclusive,
and a,b is one block away from c,d.
-	The return value will be between 0 and 2^63-1 inclusive. 
*/
export function numWays(width: number, height: number, bad: string[]) {
  const status: bigint[][] = [[1n]];
  const untraversable: { [pointA: string]: { [pointB: string]: boolean } } = {};

  // Build untraversable map
  for (const badItem of bad) {
    const parts = badItem.split(' ');
    const pointA = `${parts[0]}${parts[1]}`;
    const pointB = `${parts[2]}${parts[3]}`;
    if (untraversable[pointA]) {
      untraversable[pointA][pointB] = true;
    } else {
      untraversable[pointA] = { [pointB]: true };
    }
    if (untraversable[pointB]) {
      untraversable[pointB][pointA] = true;
    } else {
      untraversable[pointB] = { [pointA]: true };
    }
  }

  for (let i = 0; i <= width; i++) {
    if (status[i] === undefined) {
      status[i] = [];
    }
  }

  for (let i = 0; i <= width; i++) {
    for (let j = 0; j <= height; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      status[i][j] = (j > 0 && isTraversable(i, j, i, j - 1, untraversable) ? status[i][j - 1] : 0n) + (i > 0 && isTraversable(i, j, i - 1, j, untraversable) ? status[i - 1][j] : 0n);
    }
  }

  return status[width][height];
}

function isTraversable(x1: number, y1: number, x2: number, y2: number, untraversable: { [pointA: string]: { [pointB: string]: boolean } }) {
  const pointA = `${x1}${y1}`;
  const pointB = `${x2}${y2}`;
  return (!untraversable[pointA] || (untraversable[pointA] && !untraversable[pointA][pointB])) && (!untraversable[pointB] || (untraversable[pointB] && !untraversable[pointB][pointA]));
}
