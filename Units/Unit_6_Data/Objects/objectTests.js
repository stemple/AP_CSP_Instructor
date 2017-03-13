QUnit.test("Test the shake behavior.", function (assert) {
    var myPet = new Pet("test", "Dog");
    var result = myPet.shake();
    assert.deepEqual(result, "Nice to meet you! I love you!", "Success - a dog can shake!");
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    result = myPet.shake();
    assert.deepEqual(result, "I'm hungry! Let's eat first. I love you!", "Success - a dog won't shake if it's hungry");
    myPet = new Pet("test", "Cat");
    result = myPet.shake();
    assert.deepEqual(result, "Ugh. I'm a cat. I never shake", "Success - cats don't shake!");
});
