QUnit.test("Test the shake behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.shake();
    assert.deepEqual(result, "Nice to meet you! I love you!", "Success - a dog can shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't shake if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.shake();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't shake if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't shake if it's sleeping" );
    myPet = new Pet("test", "Cat");
    var result = myPet.shake();
    assert.deepEqual(result, "Ugh. I'm a cat. I never shake", "Success - cats don't shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't shake if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't shake if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't shake if it's sleeping" );
});

QUnit.test("Test the roll over behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.rollOver();
    assert.deepEqual(result, "Rolling! Now what? I love you!", "Success - a dog can roll over!");
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't roll over if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.rollOver();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't roll over if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't roll over if it's sleeping" );
    myPet = new Pet("test", "Cat");
    var result = myPet.rollOver();
    assert.deepEqual(result, "Ugh. I'm a cat. I only roll over if I want to.", "Success - cats don't roll over (unless they want to)!");
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    result = myPet.rollOver();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't roll over if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.rollOver();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't roll over if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't roll over if it's sleeping" );
});

QUnit.test("Test the fetch behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.fetch();
    assert.deepEqual(result, "Must get the stick! I love you!", "Success - a dog can fetch!");
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't fetch if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.fetch();
    assert.deepEqual(result, "Yawn. Let's play after a nap. I love you!", "Success - a dog won't fetch if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a dog won't fetch if it's sleeping" );
    myPet = new Pet("test", "Cat");
    var result = myPet.fetch();
    assert.deepEqual(result, "Ugh. I'm a cat. I don't fetch.", "Success - cats don't fetch (unless they want to)!");
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    result = myPet.fetch();
    assert.deepEqual(result, "Ugh. Feed me before I'll even think about it.", "Success - a cat won't fetch if it's hungry");
    myPet.hunger = 0;
    myPet.sleepy = 5;
    result = myPet.fetch();
    assert.deepEqual(result, "Ugh. I need a 12 hour nap first.", "Success - a cat won't fetch if it's sleepy");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    myPet.awake = false;
    result = myPet.shake();
    assert.deepEqual(result, "Zzzz...", "Success - a cat won't fetch if it's sleeping" );
});

QUnit.test("Test the nap state", function (assert) {
    var myPet = new Pet("test", "Dog");
    myPet.sleepy = 4;
    var result = myPet.nap();
    assert.deepEqual(result, "Zzzz...", "Success - the pet is napping");
    var result = myPet.sleepy;
    assert.equal(result, 0, "Success - a nap makes a pet not sleepy");
    var result = myPet.awake;
    assert.equal(result, false, "Success - a pet is not awake when napping");
});

QUnit.test("Test the eat behavior", function (assert) {
    var myPet = new Pet("test", "Dog");
    myPet.hunger = 2;
    var result = myPet.eat();
    assert.deepEqual(result, "Nom nom nom nom. Yum, thank you for this delicious food! I love you!", "Success - the dog eats!");
    var result = myPet.hunger;
    assert.equal(result, 0, "Success - the dog is not hungry after it eats!");
    var myPet = new Pet("test", "Cat");
    myPet.hunger = 2;
    var result = myPet.eat();
    assert.deepEqual(result, "Ugh, I guess I'll eat this.", "Success - the cat eats!");
    var result = myPet.hunger;
    assert.equal(result, 0, "Success - the cat is not hungry after it eats!");
});

QUnit.test("Test the wake up behavior", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.wakeUp();
    assert.deepEqual(result, "I'm awake! Let's eat and then play! I love you!", "Success - a dog wakes up!");
    var result = myPet.hunger;
    assert.equal(result, 4, "Success - a dog has a hunger level of 4 after waking up.");
    var myPet = new Pet("test", "Cat");
    var result = myPet.wakeUp();
    assert.deepEqual(result, "Ugh, I'm awake now. Is there anything to eat around here?", "Success - a cat wakes up!");
    var result = myPet.hunger;
    assert.equal(result, 4, "Success - a cat has a hunger level of 4 after waking up.");
});

QUnit.test("Test the speak behavior", function (assert) {
    var myPet = new Pet("test", "Dog");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    var result = myPet.speak();
    assert.deepEqual(result, "Woof! That means I love you!", "Success - a dog can speak!");
    var result = myPet.hunger;
    assert.equal(result, 1, "Success - speaking increases a dog's hunger");
    var result = myPet.sleepy;
    assert.equal(result, 1, "Success - speaking increases a dog's sleepiness");
    var myPet = new Pet("test", "Cat");
    myPet.hunger = 0;
    myPet.sleepy = 0;
    var result = myPet.speak();
    assert.deepEqual(result, "Ugh. meow.", "Success - a cat can speak!");
    var result = myPet.hunger;
    assert.equal(result, 1, "Success - speaking increases a cats's hunger");
    var result = myPet.sleepy;
    assert.equal(result, 1, "Success - speaking increases a cats's sleepiness");
});




