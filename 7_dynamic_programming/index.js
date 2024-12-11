function maxSum(arr) {
    if (arr.length === 1) return arr[0];

    const f = [];
    f[0] = arr[0];

    const g = [];
    g[0] = 0;

    let answer = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i < arr.length; ++i) {
        f[i] = Math.max(f[i-1] + arr[i], arr[i]);
        g[i] = Math.max(f[i-1], g[i-1] + arr[i]);

        answer = Math.max(answer, Math.max(f[i], g[i]))
    }
    return answer;
}

console.log(maxSum([-10, 2, 3, 4])) // expected 9
console.log(maxSum([1, -2, 0, 3])) // expected 4

