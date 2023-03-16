/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);
    if (startAt == -1) {
        //return undefined;
        throw new Error("No start found: " + start);
    }
    startAt += start.length;
    var endAt = string.indexOf(end, startAt);
    if (endAt == -1) {
        //return undefined;
        throw new Error("No end found: " + end);
    }
    return string.slice(startAt, endAt);
}

/**
 * Returns an area code from a phone number: (###) ###-####
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 * @throws {Error} If the format is incorrect
 */
function getAreaCode(phoneNum) {
    var areaCode;
    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        }
        else {
            throw new Error("Invalid area code: " + areaCode);
        }
    }
    catch (error) {
        throw new Error("Invalid phone number: " + error.message);
    }
}

/**
 * Returns the CO code from a phone number.
 * @param   {string} phoneNum The input phone number: (###) ###-####
 * @returns {string} The CO code.
 */
function getCoCode(phoneNum) {
    var coCode = between(phoneNum, ")", "-").trim();
    if(coCode.length != 3 || !Number(coCode)) {
        throw new Error("Invalid Co Code: " + coCode);
    }
    return coCode;
}

/**
 * Returns the line code a phone number.
 * @param   {string} phoneNum The input phone number: (###) ###-####
 * @returns {string} The line code
 */
function getLineCode(phoneNum) {
    var lineCode = phoneNum.slice(phoneNum.indexOf("-") + 1, phoneNum.length).trim();
    if(lineCode.length != 4 || !Number(lineCode)) {
        throw new Error("Invalid Line Code: " + lineCode);
    }
    return lineCode;
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Displays the CO code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayCoCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var coCode = getCoCode(phoneNum);
        outputText = "Your co code is " + coCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;
    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    }
    catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
