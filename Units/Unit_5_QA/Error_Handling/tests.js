QUnit.test("Test the validatePhone function.", function (assert) {
    var num = "(415) 444-4444";
    var result = validPhone(num);
    assert.deepEqual(num, result, "(415) 444-4444 is valid");
    var num = "(415)444-4444";
    var result = validPhone(num);
    assert.deepEqual(num, result, "(415)444-4444 is valid");
});

QUnit.test( "Errors thrown for validPhone", function( assert ) {
    assert.throws( function() {
        validPhone("415)444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        validPhone("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );

    assert.throws( function() {
        validPhone("(415) 44-5555");
    }, "(###) ##-#### is invalid. An error should have been thrown." );
});
