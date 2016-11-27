var screenDigits = "";
var currentNum = 0;
var lastOperation = "";
var total = 0;

function processNumber(num) {
    if (lastOperation == '=') {
        screenDigits = "";
    }
    screenDigits = screenDigits + num;
    console.log(screenDigits);
    displayScreenDigits("screen");
    currentNum = Number(screenDigits);
}

function allClear() {
    total = 0;
    screenDigits = "";
    lastOperation = "";
    currentNum = 0;
    displayScreenDigits("screen");
    console.log(currentNum);
}

function changeSign() {
    screenDigits = "-" + screenDigits;
    displayScreenDigits("screen");
    currentNum = Number(screenDigits);
    displayScreenDigits("screen");
    console.log(currentNum);
}

function percentage() {
    currentNum = Number(screenDigits);
    currentNum = currentNum * .01;
    screenDigits = currentNum;
    displayScreenDigits("screen");
    console.log(currentNum);
}

function add() {
    calculate();
    lastOperation = '+'
}

function subtract() {
    calculate();
    lastOperation = '-'
}

function divide() {
    calculate();
    lastOperation = '/'
}

function multiply (){
    calculate();
    lastOperation = 'x'
}

function equals () {
    calculate();
    lastOperation = ''
    screenDigits = total;
    displayScreenDigits("screen");
    console.log("total = " + total);
    console.log(currentNum);
    console.log(screenDigits);
    currentNum = total;
}

function displayScreenDigits(screenId) {
    // Set the 'value' attribute to update the screen
    document.getElementById(screenId).setAttribute("value", screenDigits);
}

function calculate(){
    if (lastOperation == '+') {
        total = total + currentNum;
        screenDigits = total;
        displayScreenDigits("screen");
        screenDigits = "";
        console.log("total = " + total);
    } else if (lastOperation == '-') {
        total = total - currentNum;
        screenDigits = total;
        displayScreenDigits("screen");
        screenDigits = "";
        console.log("total = " + total);
    } else if (lastOperation == 'x') {
        total = total * currentNum;
        screenDigits = total;
        displayScreenDigits("screen");
        screenDigits = "";
        console.log("total = " + total);
    } else if (lastOperation == '/') {
        total = total / currentNum;
        screenDigits = total;
        displayScreenDigits("screen");
        screenDigits = "";
        console.log("total = " + total);
    } else {
        total = currentNum;
        currentNum = 0;
        screenDigits = total;
        displayScreenDigits("screen");
        screenDigits = "";
    }
}
