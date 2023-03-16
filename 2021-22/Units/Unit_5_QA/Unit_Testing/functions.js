/**
 * Adds the elements of two arrays.
 * @param {Array} arr1 - One of the arrays to add.
 * @param {Array} arr2 - The other array to add.
 * @returns {Array} The sum of the two arrays
 */
function addTwoArrays(arr1, arr2){
    var result = [];
    for (var i = 0; i < arr1.length; i++){
        result.push(arr1[i] + arr2[i]);
    }
	return result;
}

/**
 * Subtracts the elements of two arrays.
 * @param {Array} arr1 - The array to subtract from.
 * @param {Array} arr2 - The other array that gets subtracted.
 * @returns {Array} The array of subtracted elements.
 */
function subTwoArrays(arr1, arr2){
    var result = [];
    for (var i = 0; i < arr1.length; i++){
        result.push(arr1[i] - arr2[i]);
    }
	return result;
}

/**
 * [[Description]]
 * @param   {[[Type]]} array [[Description]]
 * @returns {Array} [[Description]]
 */
function alternateSum(array) {
    var result = array[0];
	for (var i = 1; i < array.length; i++){
        if (i % 2 !== 0){
            result += array[i];
        } else {
            result -= array[i];
        }
	}
	return result;
}
