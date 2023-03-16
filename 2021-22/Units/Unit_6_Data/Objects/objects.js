function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

function Pet(name, type, owner){
    this.name = name;
    this.type = type;
    this.owner = owner;
    this.sleepy = false;
    this.awake = true;
    this.hungry = false;

    this.speak = function() {
        if (this.awake == true) {
            if(this.type == "Cat") {
                return "Meow";
            } else if (this.type == "Dog"){
                return "Woof!";
            }
        } else {
            return "Zzzzz";
        }
    };

    this.nap = function() {
        this.awake = false;
    };

    this.eat = function() {

    };

    this.rollOver = function() {
        if(this.hungry == false && this.awake == true){

        }
    };

    this.wakeUp = function() {
        this.awake = true;
        this.hungry = true;
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
