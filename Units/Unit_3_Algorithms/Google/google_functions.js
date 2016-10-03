/**
 * Multiplies the input value by 2.
 *
 * @param {number} input The value to multiply.
 * @return The input multiplied by 2.
 * @customfunction
 */
function DOUBLE(input) {
    return input * 2;
}

/**
 * Uses the pythagorean formula to calculate the hypotenuse
 *
 * @param {number} a The length of one leg.
 * @param {number} b The length of the other leg.
 * @return The hypotenuse length
 * @customfunction
 */
function HYPOTENUSE(a, b) {
    var hyp = Math.pow((Math.pow(a, 2) + Math.pow(b, 2)), 0.5);
    return hyp;
}
