/********************************
Unit Test Example
********************************/
module( "Example Unit Test" );
test( "Example Test", 2, function() {
    // Verify the method exists
    equal( typeof divide, 'function', 'Must contain a divide function' );

    // Make sure the result from the divide function is valid
    ok( divide( 4, 2 ), 2, 'Expected 2 as the result, the result was: ' + divide( 4, 2 ) );
});
/********************************
Please create your tests below...
********************************/

module( "Find minimum value Test" );
test( "Finding the minimum value", 2,  function(){
    equal( typeof findMinValue, 'function', 'Must contain a findMinValue function' );
    ok( findMinValue( 1, 2, 3 ), 1, 'Expected 1 as the result, the result was' + findMinValue( 1, 2, 3 ) );
});
