var calculator = {
    currentInput: "0",
    memory: "0",
    operator: 0,
    MAXLENGTH: 10,
    PRECISION: 10,

    displayCurrentInput: function() {
        document.getElementById('screen').value = this.currentInput;
    },

    getCurrentInput: function() {
        return document.getElementById('screen').value;
    },

    addDigit: function() {
        if (this.currentInput.length > this.MAXLENGTH) {
            this.currentInput = "0"; //limit length
        } else {
            if ((eval(this.currentInput) == 0) && (this.currentInput.indexOf(".") == -1)) {
                this.currentInput = dig;
            } else {
                this.currentInput = this.currentInput + dig;
            }
        }
        this.displayCurrentInput();
    }
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
