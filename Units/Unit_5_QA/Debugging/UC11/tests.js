//Write unit tests for user stories 1 - 6
//Remember that a user story may require more than one test.

//USER STORY 1

//USER STORY 2

//USER STORY 3

//USER STORY 4

//USER STORY 5

//USER STORY 6

QUnit.test("Test the multTable function.", function (assert) {
    var row = 2;
    var col = 1;
    var result = multTable(row, col);
    assert.deepEqual(result, "<table><tr><td>1</td></tr><tr><td>2</td></tr></table>", "We expect the result to be 1, 2.")
});

QUnit.test("Test the oddFilter function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = oddFilter(a);
    assert.deepEqual(result, [3, 5, 1], "We expect result to be 3, 5, 1");
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    result = oddFilter(a);
    assert.deepEqual(result, [1, 3, 5, 7, 9, 11], "We expect result to be 1, 3, 5, 7, 9, 11");
});

QUnit.test("Test the sort function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = sort(a);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6], "We expect result to be 1,2,3,4,5,6.");
});

QUnit.test("Test the listTriangular function.", function (assert) {
    var a = 3
    var result = listTriangularNumbers(a);
    assert.deepEqual(result, "", "We expect result to be 1,2,3,4,5,6.");
});

QUnit.test("Test the sort function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = sort(a);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6], "We expect result to be 1,2,3,4,5,6.");
});
