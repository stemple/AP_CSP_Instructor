// Test for inputing digits
QUnit.test( "Add digits test", function( assert ) {
    addDigit('1');
    addDigit('2');
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
    currentInput = "0";
});

// Test adding one, then two decimals
QUnit.test( "Add decimal test", function( assert ) {
    addDecimal();
    addDigit('2');
    addDecimal();
    assert.equal(document.getElementById("screen").value, "0.2", "Passed - Expected 0.2");
    currentInput = "0";
});

//Test AC to clear memory and current input
QUnit.test( "All clear test", function( assert ) {
    addDigit('1');
    addDigit('2');
    allClear();
    assert.equal(document.getElementById("screen").value, "0", "Passed - Expected 0");
    assert.equal( memory, "0", "Passed!" );
});

// Test add, subtract, mulitply, divide
QUnit.test( "Operator test", function( assert ) {
    allClear();
    addDigit('5');
    storeOperator('+');
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "7", "Addition Passed - Expected 7");
    storeOperator('/');
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "3.5", "Division Passed - Expected 3.5");
    storeOperator('-');
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "1.5", "Subtraction Passed - Expected 1.5");
    storeOperator('*');
    addDigit('2');
    calculate();
    assert.equal(document.getElementById("screen").value, "3", "Multiplication Passed - Expected 3");
});

// Test the ability to change the sign
QUnit.test( "Change sign test", function( assert ) {
    allClear();
    addDigit("1");
    addDigit("2");
    changeSign();
    assert.equal(document.getElementById("screen").value, "-12", "Passed - Expected -12");
    changeSign();
    assert.equal(document.getElementById("screen").value, "12", "Passed - Expected 12");
});

// Test for clearing the current input only
QUnit.test( "Clear test", function( assert ) {
    allClear();
    addDigit('5');
    storeOperator('+');
    addDigit('4');
    // might have to change the name here
    clearCurrent();
    addDigit('2');
    calculate();
    assert.equal( currentInput, "7", "Passed!" );
});

// Test the percentage user story
QUnit.test( "Percentage test", function( assert ) {
    allClear();
    addDigit('5');
    addDigit('0');
    // might have to change the name here
    percentage();
    percentage();
    assert.equal( currentInput, ".0050", "Passed!" );
});

// Test the factorial user story
QUnit.test( "Factorial test", function( assert ) {
    allClear();
    addDigit('4');
    factorial();
    assert.equal( currentInput, "24", "Passed!" );
});

// Test the square user story
QUnit.test( "Square test", function( assert ) {
    allClear();
    addDigit('4');
    square();
    assert.equal( currentInput, "16", "Passed!" );
});

// Test the square root user story
QUnit.test( "Square Root test", function( assert ) {
    allClear();
    addDigit('4');
    squareRoot();
    assert.equal( currentInput, "2", "Passed!" );
});

// Test the inverse user story
QUnit.test( "Inverse test", function( assert ) {
    allClear();
    addDigit('4');
    inverse();
    assert.equal( currentInput, "0.25", "Passed!" );
    inverse();
    assert.equal( currentInput, "4", "Passed!" );
    currentInput = "0";
    memory = "0";
});

// Challenge tests go here...but not sure how to write these.
