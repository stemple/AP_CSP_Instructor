//This file contains the desired functions after functions_start.js has been debugged.


/**
 * This function returns a array of odd numbers from a string
 * @param   {Array} a An array of numbers
 * @returns {Array} An array of odd numbers from a
 */
function oddFilter(a) {
    var result = [];
    for (i = 0; i < a.length; ++i) {
        if (a[i] % 2 != 0) {
            result.push(a[i]);
        }
    }
    return result;
}

/**
 * This function returns an array of the first n triangular numbers
 * @param {number} n The number of triangular numbers to be returned
 * @returns {Array} A list of the triangular numbers
 */
function listTriangularNumbers(n){
    var num;
    var array = [];
    for(i = 1; i <= n; ++i){
       num = 0;
       for(j = i; j >= 1; --j){
          num = num + j;
       }
       array.push(num);
    }
    return array;
}

/**
 * This function creates an HTML times table
 * @param   {number} row The row number
 * @param   {number} col The column number
 * @returns {string} The HTML table
 */
function multTable(row, col) {
    var table = "<table>";
    var x;
    for (var i = 1; i <= col; ++i) {
        table = table + "<tr>";
        for (var j = 1; j <= row; ++j) {
            x = i * j;
            table = table + "<td>" + x + "</td>";
        }
        table = table + "</tr>";
    }
    table = table + "</table>";
    return table;
}

/**
 * Returns n!
 * @param {number} n
 * @returns {number}
 */
function factorial(n){
    var result = 1;
    for(var i = n; i >=2 ; --i){
        result = result*i;
    }
    return result;
}

/**
 * Returns combinations nCk
 * @param {number} n The number to choose from
 * @param {number} k The number of items to be selected
 * @returns {number} nCk
 */
function combinations(n,k){
    var c;
    c = factorial(n)/(factorial(k)*(factorial(n-k)));
    return c;
}


/**
 * Arranges an array from least to greatest
 * @param   {Array} a An array to sort
 * @returns {Array} The sorted array
 * //NOTE-this is the iSort algorithm
 */
function sort(a) {
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
