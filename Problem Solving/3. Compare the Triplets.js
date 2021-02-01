function compareTriplets(a, b, res = [0, 0]) {
    if (!a.length) return res;
    const x = a.shift(), y = b.shift();
    x > y ? res[0]++ : y > x ? res[1]++ : 1;
    return compareTriplets(a, b, res);
}
