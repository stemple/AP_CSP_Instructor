function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Pet(name, type, owner){
    this.name = name;
    this.type = type;
    this.owner = owner;
    this.speak = function() {
        return "woof!";
    }
}

var Person = {
    fname: "Steve",
    lname: "Temple",
    birthDate: new Date("11/15/1971"),
    age: function() {
        return Math.floor((new Date() - this.birthDate)/1000/60/60/24/365);
    }
}
