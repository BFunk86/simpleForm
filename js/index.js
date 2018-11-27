/**
 * The mast method takes in the current text input and returns a phone number
 * formatted String based on the length of the current input.
 * @param input String: The input to mask
 * @returns {string}: A phone number in the format (xxx) xxx-xxxx
 */
var mask = function (input) {
    // Split the input string into an array
    var phoneArr = String(input).split("");
    if (phoneArr.length === 1) {
        phoneArr.unshift("(");
    } else if (phoneArr.length === 4) {
        phoneArr.push(") ");
    } else if (phoneArr.length === 9) {
        phoneArr.push("-");
    }
    return String(phoneArr.join(""));
};

(function (window) {

    $('#phone').keydown(function (event) {
        var phoneInput = $('#phone');
        phoneInput.val(mask(phoneInput.val()));
    });

    $('#employee-information').submit(function (event) {
        event.preventDefault();
        console.log($('#employee-information'));

        console.log("event is", event);
    })
})(window);