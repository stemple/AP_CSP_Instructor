function displayGreeting(id) {
    document.getElementById(id).innerHTML = randomGreeting();
}

function randomGreeting(){
    var random = Math.floor(Math.random()*4);
    switch (random) {
        case 0:
            return "Hola!";
        case 1:
            return "Bonjour";
        case 2:
            return "こんにちは";
        default:
            return "Howdy";
    }
}

function checkPrime(number) {
    // Get the floored square root of the incoming number
    // This is where we need to stop.
    var stop = Math.floor(Math.sqrt(number));
    // Now loop through to see if it is divisible
    // by any number between 2 and the stop number
    for (i = 2; i <= stop; ++i) {
        if (number % i == 0) {
            // Found a divisor - not prime.
            return false;
        }
    }
    return true;
}

function displayCheckPrime(inputId, outputId) {
    // Get the value from the input text box
    var input = document.getElementById(inputId).value;
    var outputText = "";
    // call the checkPrime function to determine the output text.
    if (checkPrime(input) == true) {
        outputText = "The number " + input + " is a prime number.";
    } else {
        outputText = "The number " + input + " is not prime number.";
    }
    // Update the output element's inner HTML
    document.getElementById(outputId).innerHTML = outputText;
}
