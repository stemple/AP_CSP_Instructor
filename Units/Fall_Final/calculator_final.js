/** TODO:
* 1. Add these new functions: percentage, inverse, factorial, square and square root
* 2. Bootstrap it to make it pretty!
* 3. Make it so user can only type numbers in the display, and the numbers are right aligned.
* 4. Fix divide by 0 errors!
* 5. Add the ability to clear the current input, but not memory.
* 6. Challenge: Add trig functions (in radian AND degree mode)
* 7. Extra Challenge: Add mc, m+, m-, mr butons that work!
* 8. Super Challenge: Add ( and ) buttons that work!
* 9. Super Duper Challenge: Add exponents (negatives too!)
*/

var currentInput = "0";
var memory = "0";
var operator = 0;
var MAXLENGTH = 30;

window.onerror = function(messageOrEvent, source, lineno, colno, error) {console.log("error caught");}

// Helper function for displaying the current input
function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

function getCurrentInput() {
    return document.getElementById('screen').value;
}

// Adds a digit to the current input
function addDigit(dig) {
    if (currentInput.length > MAXLENGTH) {
        currentInput = "0"; //limit length
    } else {
        if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
            currentInput = dig;
        } else {
            currentInput = currentInput + dig;
        }
    }
    displayCurrentInput();
}

// Adds a decimal to the current input
function addDecimal() {
    if (currentInput.length == 0) {
        //no leading ".", use "0."
        currentInput = "0.";
    } else {
        // First make sure one doesn't exist
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

// Clears everything.
function allClear() {
    currentInput = "0";
    operator = 0;                //clear operator
    memory = "0";                  //clear memory
    displayCurrentInput();
}

// Stores the last operator pushed for multiply, divide, add, or subtract.
function storeOperator(op) {
    if (op.indexOf("*") > -1) { operator = 1; };       //codes for *
    if (op.indexOf("/") > -1) { operator = 2; };       // slash (divide)
    if (op.indexOf("+") > -1) { operator = 3; };       // sum
    if (op.indexOf("-") > -1) { operator = 4; };       // difference

    memory = currentInput;                 //store value
    currentInput = "0";
    displayCurrentInput();
}

// Calculate using operator, the memory and what is current
function calculate() {
    if (operator == 1) { currentInput = eval(memory) * eval(currentInput); };
    if (operator == 2) {
        if (currentInput == "0") {
            throw new Error("Divide By 0 Error");
        } else {
            currentInput = eval(memory) / eval(currentInput);
        }
    }
    if (operator == 3) { currentInput = eval(memory) + eval(currentInput); };
    if (operator == 4) { currentInput = eval(memory) - eval(currentInput); };

    operator = 0;                //clear operator
    memory    = "0";              //clear memory
    displayCurrentInput();
}

// Change the sign of the current input
function changeSign() {
    currentInput = currentInput * (-1);
    displayCurrentInput();
}

// Clear the current input back to 0
function clear() {

}

// Change the current input to a percentage
function percentage() {

}

// Calculate the factorial of the current input
function factorial() {


}

// Calculate the square of the current input
function square() {

}

// Calculate the square root of the current input
function squareRoot() {

}

// Calculate the inverse of the current input
function inverse() {

}
