QUnit.test("a basic test example", function (assert) {
    var value = "hello";
    assert.equal(value, "hello", "We expect value to be hello");
});

/**
QUnit.test( "Test the arrayAdd function.", function( assert ) {
    var arr1 = [1,2,3];
    var arr2 = [4,5,6];
    var arr3 = [-1, -2];
    var result1 = addTwoArrays(arr1, arr2);
    var result2 = addTwoArrays(arr2, arr1);
    var result3 = addTwoArrays(arr1, arr3);
    var result4 = addTwoArrays(arr3, arr1);
    assert.deepEqual(result1, [5,7,9], "We expect the value [5,7,9]." );
    assert.deepEqual(result2, [5,7,9], "We expect the value [5,7,9]." );
    assert.deepEqual(result3, [0,0,3], "We expect the value [0,0,3]." );
    assert.deepEqual(result4, [0,0,3], "We expect the value [0,0,3]." );
    assert.deepEqual(result4, [0,0,3], "We expect the value [0,0,3]." );
});
*/
