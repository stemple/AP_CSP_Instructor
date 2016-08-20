QUnit.test( "Test the returnFive function", function( assert ) {
      assert.equal( returnFive(), 5, "We expect the value 5." );
    });

QUnit.test( "Test the returnFive function 2", function( assert ) {
      assert.notEqual( returnFive(), 4, "We expect the value 5." );
    });