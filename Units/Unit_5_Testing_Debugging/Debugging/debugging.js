//THESE FUNCTIONS CONTAIN BUGS!!!!!
//#1  Returns a row by col multiplication table
function multTable(row, col) {
    var table = "<table>";
    var x;
    for (var i = 1; i <= row; ++i) {
        table = table + "<tr>";
        for (var j = 1; j <= col; ++j) {
            x = i * j;
            table = table + "<td>" + x + "</td>";
        }
        table = table + "</tr>";
    }
    table = table + "</table>";
    return table;
}
//#2 Randomly shuffles the elements in an array
function shuffle(arr) {
    var shuffledArr = arr;
    var max = shuffledArr.length;
    var range;
    var index;
    for (i = 0; i < shuffledArr.length; i++) {
        range = max - i;
        index = Math.floor(Math.random() * range) + i;
        var temp = shuffledArr[i];
        shuffledArr[i] = shuffledArr[index];
        shuffledArr[index] = temp;
    }
    return shuffledArr;
}
//#3  Arranges and array from least to greatest
function iSort(a) {
    // this sorts a list of random numbers
    result = a;
    for (var i = 1; i < result.length; ++i) {
        var j = result[i];
        var k;
        for (k = i - 1;
            (k >= 0) && (j < result[k]); k--) {
            result[k + 1] = result[k];
        }
        result[k + 1] = j;
    }
    return result;
}
