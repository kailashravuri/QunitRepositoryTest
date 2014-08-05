/// <reference path="../code.js" />
/// <reference path="../API/jquery-1.10.2.js" />

test("get value from DOM", function () {
    $('<input id="ResultTestBox" type="text" value="4"/>').appendTo('#qunit-fixture');
    var result = "4";
    equal(result, returnInputValue(), "testing result box value");
});