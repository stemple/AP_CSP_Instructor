QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 444-4444";
    var result = getAreaCode(num);
    assert.deepEqual("415", result, "Valid area code test passed.");
});

QUnit.test("Test the getCoCode function.", function (assert) {
    var num = "(415) 444-4444";
    var result = getCoCode(num);
    assert.deepEqual("444", result, "Returned a valid central office code.");
});

QUnit.test("Test the getLineCode function.", function (assert) {
    var num = "(415) 444-4444";
    var result = getLineCode(num);
    assert.deepEqual(result, "4444", "Returned a valid line code.");
});

QUnit.test( "Errors thrown for getAreaCode", function( assert ) {
    assert.throws( function() {
        getAreaCode("415)444-5555");
    }, "Missing '('. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("(41) 444-5555");
    }, "Only two digits. An error should have been thrown." );

    assert.throws( function() {
        getAreaCode("(4145) 444-5555");
    }, "More than 3 digits. An error should have been thrown." );
});
