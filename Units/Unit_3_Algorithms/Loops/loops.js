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

function testPrime(number) {
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

function shuffle(someArr) {
    var shuffledArr = someArr;
    var max = shuffledArr.length;
    var range;
    var index;
    for (i = 0; i < shuffledArr.length; i++) {
        range = max - i;
        index = Math.floor(Math.random() * range) + i;
        var temp = shuffledArr[i];
        shuffledArr[i] = shuffledArr[index];
        shuffledArr[index] = temp;
    }
    return shuffledArr;
}