function gcd(a, b) {

    while (b != 0 && a != 0) {
        if (a > b) {
            a = a - b;
        } else {
           b = b - a;
        }
    }
    return a;
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