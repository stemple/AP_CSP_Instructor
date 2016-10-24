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
    var stop = Math.floor(number / 2);
    for (i = 2; i <= stop; ++i) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function displayPrimeTest(inputId, outputId) {
    var input = document.getElementById(inputId).value;
    var outputText = "";
    if (checkPrime(input) == true) {
        outputText = "The number " + input + " is a prime number.";
    } else {
        outputText = "The number " + input + " is not prime number.";
    }
    document.getElementById(outputId).innerHTML = outputText;
}
