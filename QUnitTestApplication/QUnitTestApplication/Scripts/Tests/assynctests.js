// calling assync function 
/// <reference path="../Scripts/scope_multiple.js" />
module('Asynchronous tests :');


test('asynchronous failure test', function () {
    setTimeout(function () {
        ok(true);
    }, 100);
});

QUnit.asyncTest("asynchronous test: ten seconds later!", function (assert) {

    // Asynchronous call to setTimeout Anonymous block
    setTimeout(function () {
        assert.ok(true, "Passed and ready to resume!");
        QUnit.start();
    }, 8000);
});

QUnit.test("Test after assync is suspended", function () {

    var res = anotherFile("test");
    ok(res, "Wonderful...!");
});