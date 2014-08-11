
var mathLib = {
    add5: function (a) {
        return a + 5;
    },
    isEven: function(num){
        return num % 2 === 0;
    }
};

function returnInputValue()
{
    var resultBoxValue = $('input#ResultTestBox').val();
    return resultBoxValue;
}