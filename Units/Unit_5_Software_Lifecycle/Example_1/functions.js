function returnFive() {
    var x = 5;
    return x;
}

function iSort(a, n) {
  // this sorts a list of random numbers
    for (var i = 1; i < n; ++i) {
        var j = a[i];
        var k;
        for (k = i - 1; (k >= 0) && (j < a[k]); k--) {
            a[k + 1] = a[k];
        }
        a[k + 1] = j;
    }
}