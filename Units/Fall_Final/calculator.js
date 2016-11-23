var args = [];
var screenDigits = "";

function regButtonPress(val) {
    if (parseInt(val) || val == '.' || val == '0') {
        screenDigits = screenDigits + val;
        console.log(screenDigits);
        displayScreenDigits("screen");
    } else {
        parseArgs(val);
    }
}

function displayScreenDigits(screenId) {
    // Set the 'value' attribute to update the screen
    document.getElementById(screenId).setAttribute("value", screenDigits);
}

function parseArgs(val){
    args.push(Number(screenDigits));
    args.push(val);
    calculate();
    screenDigits = "";
    console.log(args);
}

function calculate(){
    var argument;
    var total = 0;
    for(var i = 0; i < args.length; i++) {
        if (args[i] > 0) {
            argument = args[i];
            console.log("argument = " + argument);
        } else if (args[i] == '+') {
            total = total + argument;
            screenDigits = total;
            displayScreenDigits("screen");
            console.log("total = " + total);
        } else if (args[i] == '-') {
            total = total - argument;
            screenDigits = total;
            displayScreenDigits("screen");
            console.log("total = " + total);
        } else if (args[i] == 'x') {
            total = total * argument;
            screenDigits = total;
            displayScreenDigits("screen");
            console.log("total = " + total);
        } else if (args[i] == '/') {
            total = total / argument;
            screenDigits = total;
            displayScreenDigits("screen");
            console.log("total = " + total);
        } else if (args[i] == '=') {
            total = total;
            screenDigits = total;
            displayScreenDigits("screen");
            console.log("total = " + total);
        }
    }
}
