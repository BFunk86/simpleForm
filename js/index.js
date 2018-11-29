(function (window) {

    var url = "http://fakeurl.com";

    /* HELPER METHODS */

    /**
     * The mask method takes in the current text input and returns a phone number
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

    /* CALLBACK METHODS */

    /**
     * callback function used to handle the event fired
     * when input is entered into the phone input box
     * @param event: The input event passed to the callback
     */
    var phoneInput = function (event) {
        var phoneInput = $('#phone');
        phoneInput.val(maskPhoneInput(phoneInput.val()));
    };

    /**
     * callback used to handle the form submit event
     * @param event: The submit event passed to the callback
     */
    var submitForm = function(event) {
        event.preventDefault();
        var formData = {
            name: $('#name').val(),
            eNumber: $('#eNumber').val(),
            phone: $('#phone').val(),
            address: $('#address').val(),
            city: $('#city').val(),
            state: $('#state').val(),
            zip: $('#zip').val(),
            currentEmployer: $('#current-employer').is(':checked')
        };
        $.ajax({
            url: url,
            type: 'POST',
            contentType: 'application/json',
            data: formData,
            success: function (result) {
                console.log(result);
            },
            error: function(xhr, status, error) {
                console.error(error);
            }
        })
    };

    /* EVENTS */

    // Handle input into the phone field
    $('#phone').keydown(phoneInput);

    // Handle Form Submit event
    $('#employee-information').submit(submitForm);

})(window);