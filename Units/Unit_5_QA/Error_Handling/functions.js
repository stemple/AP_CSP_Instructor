/**
* This function removes part of string between two sub strings
* @param {string} text This is the original string
* @param {string} start This is the starting string
* @param {string} end This is the ending string
* @return {string} The string in between
*/
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
* This function validates a phone number
* @param {string} value This is the phone number
* @return {string} The string in between
*/
function validPhone(phoneNum) {
    var areaCode = between(phoneNum, "(", ")");
    var baseNum
    if (phoneNum.charAt(3) == "-" &&
//            nums[i].length == 8 &&
//            Number(nums[i].slice(0, 3))
//            && Number(nums[i].slice(4))) {
//            validNums.push(nums[i]);
//        }
//    }
    return phoneNum;
}


function validate(phoneInputId, outputId) {

    var output = document.getElementById(outputId);
    try {
        var phoneNum = document.getElementById(phoneInputId).value;
        validPhone(phoneNum);
        output.innerHTML = "Yea! Valid."
    } catch (err) {
        output.innerHTML = err.message;
    }

}
