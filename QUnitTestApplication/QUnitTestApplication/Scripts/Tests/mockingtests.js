/// <reference path="../API/jquery-1.10.2.js" />
/// <reference path="../API/jquery.ba-simple-ajax-mocking.js" />

// Unit tests.
module('Mocking Test :')
test("Mock Ajax call Test", function () {
    expect(5);
    stop();
    $.getJSON("/user", function (data) {
        ok(data, "data is returned from the server");
        equal(data.status, "-1", "no user specified, status should be -1");
        start();
    });

    stop();
    $.getJSON("/user/123", function (data) {
        ok(data, "data is returned from the server");
        equal(data.status, "1", "user found, status should be 1");
        equal(data.user, "sample user 123", "user found, id should be 123");
        start();
    });
});

// Simulate your API.
$.mockAjax("json", {
    "/user": { status: -1 },
    "/user/(\\d+)": function (matches) {
        return { status: 1, user: "sample user " + matches[1] };
    }
});