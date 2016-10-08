function work(times) {
  for (i = 0; i < times; i++) {
    document.write("All work and no play makes Jack a dull boy.", "<br/>");
  }
}

function factorial(number) {
    var result = 1;
    for (i = number; i > 0; i--) {
        result = result * i;
        console.log(result);
    }
    return result;
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

function multiply(a, b){
    for(i = 0; i < a.length; i++){
        a[i] = a[i]*b;
        console.log(a[i]);
    }
    return a;
}

function evenOrOdd(numbers) {
    var results = [];
    for (i = 0; i < numbers.length; i++) {
        if (Number.isInteger(numbers[i])) {
            if (numbers[i] % 2 == 0) {
                results[i] = "even";
            } 
            else {
                results[i] = "odd";
            }
        } 
        else {
            results[i] = "Not an integer.";
        }
        console.log(results);
    }
    return results;
}

function stack(num) {
    var sout = "";
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= i; j++) {
            sout = sout + " * ";
        }
        sout = sout + "<br />";
    }
    return sout;
}

function shuffle(a) {
    var range;
    var index;
    for (i = a.length-1; i > 0; i--) {
        index = Math.floor(Math.random() * (i+1));
        var temp = a[i];
        a[i] = a[index];
        a[index] = temp;
    }
    return a;
}

function checkZipList(codes){
    
}

function validPhoneList(nums) {
    var validNums = [];
    for (i = 0; i < nums.length; i++) {
        if (nums[i].charAt(3) == "-" && nums[i].length == 8 && Number(nums[i].slice(0, 3)) && Number(nums[i].slice(4))) {
            validNums.push(nums[i]);
        }
    }
    return validNums;
}

function validZipList(codes) {
    var validZips = [];
    for(i = 0; i < codes.length; i++) {
        if(codes[i].length == 5 && Number(codes[i]) && codes[i].charAt(0) == "9") {
            validZips.push(codes[i]);
        }
    }
    return validZips;
}

function validZipList(codes) {
    var validZips = [];
    for(i = 0; i < codes.length; i++) {
        if(codes[i].length == 5 && Number(codes[i]) && codes[i].charAt(0) == "9") {
            validZips.push(codes[i]);
        }
    }
    return validZips;
}
