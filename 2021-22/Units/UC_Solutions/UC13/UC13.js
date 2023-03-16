function Cube(length, mass) {
    this.length = length;
    this.mass = mass;
    this.volume = Math.pow(this.length, 3);
    this.density = this.mass / this.volume;
    this.surface_area = 6 * Math.pow(this.length, 2);
}

function Pet(name, species) {
    this.name = name;
    this.species = species;
    this.hunger = 0;
    this.sleepy = 0;
    this.awake = true;
    this.nap = function () {
        this.sleepy = 0;
        return "Zzzzz...";
    }
    this.eat = function () {
        this.hunger = 0;
        this.sleepy++;
        if (this.species == "Cat") {
            return "Ugh, I guess I'll eat this.";
        } else if (this.species == "Dog") {
            return "Nom nom nom nom. Yum, thank you for this delicious food! I love you!";
        }
    }
    this.nap = function () {
        this.sleepy = 0;
        this.awake = false;
        return "Zzzz...";
    }
    this.wakeUp = function () {
        this.awake = true;
        this.hunger = 4;
        if (this.species == "Cat") {
            return "Ugh, I'm awake now. Is there anything to eat around here?";
        } else if (this.species == "Dog") {
            return "I'm awake! Let's eat and then play! I love you!";
        }
    }
    this.speak = function () {
        this.hunger++;
        this.sleepy++;
        if(this.species == "Cat") {
            return "Ugh. meow.";
        } else if (this.species == "Dog"){
            return "Woof! That means I love you!";
        }
    }
    this.fetch = function () {
        if (this.awake == true) {
            if (this.hunger <= 3 && this.sleepy <= 4 && this.awake == true) {
                this.sleepy++;
                this.hunger++;
                if (this.species == "Cat") {
                    return "Ugh. I'm a cat. I don't fetch.";
                } else if (this.species == "Dog") {
                    return "Must get the stick! I love you!";
                }
            } else if (this.hunger > 3) {
                if (this.species == "Cat") {
                    return "Ugh. Feed me before I'll even think about it.";
                } else if (this.species == "Dog") {
                    return "I'm hungry! Let's eat first. I love you!"
                }
            } else if (this.sleepy > 4) {
                if (this.species == "Cat") {
                    return "Ugh. I need a 12 hour nap first.";
                } else if (this.species == "Dog") {
                    return "Yawn. Let's play after a nap. I love you!";
                }
            }

        } else {
            return "Zzzz...";
        }
    }
    this.rollOver = function () {
        if (this.awake == true) {
            if (this.hunger <= 3 && this.sleepy <= 4 && this.awake == true) {
                this.sleepy++;
                this.hunger++;
                if (this.species == "Cat") {
                    return "Ugh. I'm a cat. I only roll over if I want to.";
                } else if (this.species == "Dog") {
                    return "Rolling! Now what? I love you!";
                }
            } else if (this.hunger > 3) {
                if (this.species == "Cat") {
                    return "Ugh. Feed me before I'll even think about it.";
                } else if (this.species == "Dog") {
                    return "I'm hungry! Let's eat first. I love you!"
                }
            } else if (this.sleepy > 4) {
                if (this.species == "Cat") {
                    return "Ugh. I need a 12 hour nap first.";
                } else if (this.species == "Dog") {
                    return "Yawn. Let's play after a nap. I love you!";
                }
            }

        } else {
            return "Zzzz...";
        }
    }
    this.shake = function() {
        if (this.awake == true) {
            if (this.hunger <= 3 && this.sleepy <= 4 && this.awake == true) {
                this.sleepy++;
                this.hunger++;
                if (this.species == "Cat") {
                    return "Ugh. I'm a cat. I never shake";
                } else if (this.species == "Dog") {
                    return "Nice to meet you! I love you!"
                }
            } else if (this.hunger > 3) {
                if (this.species == "Cat") {
                    return "Ugh. Feed me before I'll even think about it.";
                } else if (this.species == "Dog") {
                    return "I'm hungry! Let's eat first. I love you!"
                }
            } else if (this.sleepy > 4) {
                if (this.species == "Cat") {
                    return "Ugh. I need a 12 hour nap first.";
                } else if (this.species == "Dog") {
                    return "Yawn. Let's play after a nap. I love you!";
                }
            }

        } else {
            return "Zzzz...";
        }
    }
}


