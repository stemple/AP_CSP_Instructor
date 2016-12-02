QUnit.test( "Test the returnFive function", function( assert ) {
      assert.equal( returnFive(), 5, "We expect the value 5." );
      assert.notEqual( returnFive(), 4, "We expect the value 5." );
    });

QUnit.test( "Test the iSort function", function( assert ) {
    var x = Array(3,2,1);
    var test = iSort(x);
    assert.deepEqual(test, Array(1,2,3), "We expect the value [1,2,3]." );
    });
