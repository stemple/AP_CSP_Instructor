//Unit Tests for UC11

//USER STORY 1
QUnit.test("Test the oddFilter function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = oddFilter(a);
    assert.deepEqual(result, [3, 5, 1], "We expect result to be 3, 5, 1");
    a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
    result = oddFilter(a);
    assert.deepEqual(result, [1, 3, 5, 7, 9, 11], "We expect result to be 1, 3, 5, 7, 9, 11");
    a = [2,4,6]
    result = oddFilter(a);
    assert.deepEqual(result, [], "We expect result to be []");
});
//USER STORY 2
QUnit.test("Test the listTriangularNumbers function.", function (assert) {
    var n = 5;
    var result = listTriangularNumbers(n);
    assert.deepEqual(result, [1,3,6,10,15], "We expect result to be 1, 3, 6, 10, 15");
});
//USER STORY 3
QUnit.test("Test the multTable function.", function (assert){
    var r = 2;
    var c = 3;
    var result = multTable(r,c);
    assert.equal(result, "<table><tr><td>1</td><td>2</td><td>3</td></tr><tr><td>2</td><td>4</td><td>6</td></tr></table>", "We expect a two by three multiplication table.");
});

//USER STORY 4
QUnit.test("Test the factorial function", function (assert){
    var n = 5;
    var result = factorial(n);
    assert.equal(result, 120, "We expect 120.");
});

//USER STORY 5
QUnit.test("Test the combinations function", function (assert){
    var n = 5;
    var k = 3;
    var result = combinations(n,k);
    assert.equal(result, 10, "We expect 10.");
});

//USER STORY 6
QUnit.test("Test the sort function.", function (assert) {
    var a = [3, 5, 1, 6, 2, 4];
    var result = sort(a);
    assert.deepEqual(result, [1, 2, 3, 4, 5, 6], "We expect result to be 1,2,3,4,5,6.");
});
