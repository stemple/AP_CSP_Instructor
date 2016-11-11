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
    if (isNaN(input)) {
        outputText = "The value " + input + " is not a number.";
        changeElementClass(outputId, "invalid");
    } else if (checkPrime(input) == true) {
        outputText = "The number " + input + " is a prime number.";
        changeElementClass(outputId, "success");
    } else {
        outputText = "The number " + input + " is not prime number.";
        changeElementClass(outputId, "fail");
    }
    // Update the output element's inner HTML
    document.getElementById(outputId).innerHTML = outputText;
}

function setSuccessStyle(id) {
  var el = document.getElementById(id);
  el.style.color = "green";
}

function setFailStyle(id) {
    var el = document.getElementById(id);
    el.style.color = "grey";
}

function setInvalidStyle(id) {
    var el = document.getElementById(id);
    el.style.color = "red";
    el.style.fontSize = "20px";
    el.style.borderStyle = "solid";
    el.style.borderColor = "red";
    el.style.borderRadius = "5px";
    el.style.padding = "5px";
}


function changeElementClass(id, className) {
  var el = document.getElementById(id);
  el.className = className;
}
