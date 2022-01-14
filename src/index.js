module.exports = function reverse (n) {
    const absN = Math.abs(n);
    const strN = absN.toString();
    return strN[strN.length -1] + strN[strN.length -2] + strN[strN.length -3];
}
