function divide(a, b) {
    if(b === 0) {
        // What should I do?
        throw new Error("Divide By Zero Error");
    }

    if (parseInt(b) === NaN) {
        throw new Error("Not a Number Error");
    }
    return a/b;
}

function inverse(x){
    var result;
    try {
        result = divide(1, x);
    } catch(e) {
        console.log(e);
        return 0;
    }
}

