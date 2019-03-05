var sumArray = function (a) {
    return a.reduce(function (sum, crr) { return sum += crr; });
};
var subsetSum = function (a, s) {
    if (sumArray(a) === s) {
        return true;
    }
    for (var i = 0; i < a.length && a.length > 1; i++) {
        var subArray = void 0;
        // Leave current element out
        subArray = a.slice(0, i).concat(a.slice(i + 1));
        if (subsetSum(subArray, s)) {
            return true;
        }
    }
    return false;
};
