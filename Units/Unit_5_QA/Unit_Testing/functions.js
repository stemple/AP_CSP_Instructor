/**
 * Adds the elements of two arrays.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function addTwoArrays(arr1, arr2){
    var result = [];
    for (var i = 0; i < arr1.length; i++){
        result.push(arr1[i] + arr2[i]);
    }
	return result;
}

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
