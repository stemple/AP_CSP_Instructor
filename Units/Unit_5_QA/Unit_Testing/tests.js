QUnit.test("Test the addTwoArrays function.", function (assert) {
    var a1 = [1, 2, 3];
    var a2 = [3, 2, 1];
    var a3 = [3, 2, 0];
    var result = addTwoArrays(a1, a2);
    var result2 = addTwoArrays(a3, a1);
    assert.deepEqual(result, [4, 4, 4], "We expect result to be 4, 4, 4");
    assert.deepEqual(result2, [4, 4, 3], "We expect result to be 4, 4, 3");
});

QUnit.test("Test the subTwoArrays function.", function (assert) {
    var a1 = [1, 2, 3];
    var a2 = [3, 2, 1];
    var a3 = [3, 2, 0];
    var result = subTwoArrays(a1, a2);
    var result2 = subTwoArrays(a3, a1);
    assert.deepEqual(result, [-2, 0, 2], "We expect result to be -2, 0, 2");
    assert.deepEqual(result2, [2, 0, -3], "We expect result to be 2, 0, -3");
});
