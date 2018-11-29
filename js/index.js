(function (window) {


    /**
     * The mast method takes in the current text input and returns a phone number
     * formatted String based on the length of the current input.
     * @param input String: The input to mask
     * @returns {string}: A phone number in the format (xxx) xxx-xxxx
     */
    var maskPhoneInput = function (input) {
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

    var SubmitForm = function(event) {
        event.preventDefault();

    }

    // Handle input into the phone field
    $('#phone').keydown(function (event) {
        var phoneInput = $('#phone');
        phoneInput.val(maskPhoneInput(phoneInput.val()));
    });

    // Handle Form Submit
    $('#employee-information').submit(function (event) {
        event.preventDefault();
        console.log($('#employee-information'));

        console.log("event is", event);
    })
})(window);