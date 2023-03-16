export function pointInsideTriangle(px: number, py: number, x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    return triangleArea(x1, y1, x2, y2, x3, y3) === triangleArea(px, py, x2, y2, x3, y3) + triangleArea(x1, y1, px, py, x3, y3) + triangleArea(x1, y1, x2, y2, px, py);
}

function triangleArea(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) {
    const ab = [x2 - x1, y2 - y1];
    const nab = [ab[1], -ab[0]]
    const ac = [x3 - x1, y3 - y1];
    return 1 / 2 * Math.abs(nab[0] * ac[0] + nab[1] * ac[1]);
}
