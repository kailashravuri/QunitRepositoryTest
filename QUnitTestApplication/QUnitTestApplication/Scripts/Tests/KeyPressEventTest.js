/// <reference path="../API/jquery-1.10.2.js" />
/// <reference path="../KeyPress.js" />

test("keylogger api behavior", function (assert) {

    var event,
        $doc = $(document),
        keys = KeyLogger($doc);

    // trigger event
    event = $.Event("keydown");
    event.keyCode = 9;
    $doc.triggerHandler(event);

    // verify expected behavior
    assert.equal(keys.log.length, 1, "One key was logged");
    assert.equal(keys.log[0], 9, "Enter key was pressed by the user");

});