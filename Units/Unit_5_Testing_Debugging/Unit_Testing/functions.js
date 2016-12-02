function returnFive() {
    var x = 5;
    return x;
}

function iSort(a) {
  // this sorts a list of random numbers
    result = a;
    for (var i = 1; i < result.length; ++i) {
        var j = result[i];
        var k;
        for (k = i - 1; (k >= 0) && (j < result[k]); k--) {
            result[k + 1] = result[k];
        }
        result[k + 1] = j;
    }
    return result;
}

function multiply(a, b) {

}
