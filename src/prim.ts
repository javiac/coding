export function prim(L: number[][]) {
  const masProximo = [];
  const distMin = [-1];
  const T = [];

  for (let i = 1; i < L.length; i++) {
    masProximo[i] = 0;
    distMin[i] = L[i][0];
  }

  for (let i = 0; i < L.length - 1; i++) {
    let min = Infinity;
    let k = 0;
    distMin.forEach((dist, index) => {
      if (dist >= 0 && dist < min) {
        min = dist;
        k = index;
      }
    });

    T.push([masProximo[k], k]);
    distMin[k] = -1;

    for (let j = 1; j < distMin.length; j++) {
      if (L[j][k] < distMin[j]) {
        distMin[j] = L[j][k];
        masProximo[j] = k;
      }
    }
  }

  return T;
}
