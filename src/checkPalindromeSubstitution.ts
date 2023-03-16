export function checkPalindromeSubstitution(s: string, startIndex: number[], endIndex: number[], subs: number[]) {
    let result = '';
    for (let i = 0; i < startIndex.length; i++) {
        const substring = s.substring(startIndex[i], endIndex[i] + 1);
        console.log('substring', substring)

        let nDifferences = 0;
        for (let j = 0; j < substring.length / 2; j++) {
            if (substring[j] !== substring[substring.length - 1 - j]) {
                nDifferences += 1;
            }
        }

        if (nDifferences <= subs[i]) {
            result += '1'
        } else {
            result += '0';
        }
    }
    return result;
}
