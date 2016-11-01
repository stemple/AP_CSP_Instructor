function checkPrime(number) {
    var stop = Math.floor(Math.sqrt(number));
    for (i = 2; i <= stop; ++i) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function displayPrimeTest(inputId, outputId) {
    // Get elements
    var inputElem = document.getElementById(inputId);
    var outputElem = document.getElementById(outputId);

    // Do the calculation
    var input = inputElem.value;
    var is_prime = checkPrime(input);

    // Produce output
    var outputText = "";
    if (is_prime == true) {
        outputText = "The number " + input + " is a prime number.";
    } else {
        outputText = "The number " + input + " is not prime number.";
    }

    // Display the output
    outputElem.innerHTML = outputText;
    // new file
}
