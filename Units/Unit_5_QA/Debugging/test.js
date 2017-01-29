QUnit.test("Test the multTable function.", function (assert) {
    var row = 2;
    var col = 1;
    var result = multTable(row, col);
    assert.deepEqual(result, "<table><tr><td>1</td></tr><tr><td>2</td></tr></table>", "We expect the result to be 1, 2.")
});

QUnit.test("Test the iSort function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = iSort(a);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6], "We expect result to be 1,2,3,4,5,6.");
});
