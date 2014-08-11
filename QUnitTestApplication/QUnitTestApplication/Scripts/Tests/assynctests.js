/// <reference path="../Code/scope_multiple.js" />

// calling assync function
module('Asynchronous tests :');
test('asynchronous failure test', function () {
    setTimeout(function () {
        ok(true);
    }, 100);
});

asyncTest("asynchronous test: ten seconds later!", function (assert) {

    // Asynchronous call to setTimeout Anonymous block
    setTimeout(function () {
        ok(true, "Passed and ready to resume!");
        start();
    }, 8000);
});

test("Test after assync is suspended", function () {

    var res = anotherFile("test");
    ok(res, "Wonderful...!");
});