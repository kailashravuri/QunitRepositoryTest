/// <reference path="../Scripts/code.js" />
/// <reference path="../Scripts/scope_multiple.js" />

//Test 1
module('Math functions :');
test("will add 5 to passed number", function () {
    var res = mathLib.add5(10)

    equal(res, 15, "should add 5");
});


//Test 2
test("will say even number or not", function () {
    var res = mathLib.isEven(4)
    //expect(2)
    equal(false, res, "Passed!");

});

//Test 3
module('General Function :');
QUnit.test("Should return same message", function () {

    var res = anotherFile("test");

    ok(res, "Wonderful...!");

});

// testing the complete values in an object
module('Deep Equal testing')
QUnit.test("Testing the deep equal object", function () {
    var obj = { foo: "bar" };
    deepEqual(obj, checkDeepEqual(obj), "Two objects can be the same in value");
});




//QUnit.test("keylogger api behavior", function (assert) {

//    var event,
//        $doc = $(document),
//        keys = KeyLogger($doc);

//    // trigger event
//    event = $.Event("keydown");
//    event.keyCode = 9;
//    $doc.trigger(event);

//    // verify expected behavior
//    assert.equal(keys.log.length, 1, "a key was logged");
//    assert.equal(keys.log[0], 9, "correct key was logged");

//});