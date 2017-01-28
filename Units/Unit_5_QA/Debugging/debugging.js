//THESE FUNCTIONS CONTAIN BUGS!!!!!

/**
 * This function creates an HTML times table
 * @param   {number} row The row number
 * @param   {number} col The column number
 * @returns {string} The HTML table
 */
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

/**
 * Randomly shuffles the elements in an array
 * @param   {Array} arr The array to shuffle
 * @returns {Array} The shuffled array
 */
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

/**
 * Arranges an array from least to greatest
 * @param   {Array} a An array to sort
 * @returns {Array} The sorted array
 */
function iSort(a) {
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
