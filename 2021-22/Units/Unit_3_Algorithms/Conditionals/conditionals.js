function simpleDayQuote(d) {
    var quote;
    switch (d.getDay()) {   
    case 6:
            quote = "Today is Saturday - Yea!";       
        break;   
    case 0:
            quote = "Today is Sunday - Yea!";       
        break;   
    default:
            quote = "Looking forward to the Weekend!";
    }
    return quote;
}

function superiorGreeting(d) {
    var hour = d.getHours();
    if (hour < 10) {
        return "Good morning.";
    }
    else if (hour < 18) {
        return "Good day.";
    }
    else {
        return "Good evening.";
    }
}

function simpleGreeting(d) {
    var hour = d.getHours();
    if (hour < 10) {
        return "Good morning.";
    }
}

function betterGreeting(d) {
    var hour = d.getHours();
    console.log("hours = " + hour);
    if (hour < 10) {
        return "Good morning.";
    }
    else {
        return "Good day.";
    }
}

function dayQuote(d) {
    var quote;
    switch (d.getDay()) {
    case 0:
        quote = "Day off! One last day to relax!";
        break;
    case 1:
        quote = "Ugh - its Monday :(";
        break;
    case 2:
        quote = "It's Tuesday - the weekend is a long way off.";
        break;
    case 3:
        quote = "It's Wednesday, halfway through.";
        break;
    case 4:
        quote = "It's Thursday - only one more day...";
        break;
    case 5:
        quote = "Thank goodness its Friday!";
        break;
    case 6:
        quote = "Its Saturday! My favorite day! :)";
    }
    return quote;
}

function switcheroo(a) {
    var roo;
    switch (a%5) {
        case 0:
            roo = "A";
            break;
        case 1:
            roo = "B";
            break;
        case 2:
            roo = "C";
            break;
        default:
            roo = "D";
    }
    return roo;
}