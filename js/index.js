$(function () {
    const keyMap = {
        49: 1,
        50: 2,
        51: 3,
        52: 4,
        53: 5,
        54: 6,
        55: 7,
        56: 8,
        57: 9,
        48: 0
    };

    $('#phone').focus(function () {
        var phone = '';
        $('#phone').keyup(function (event) {
            var key = event.which;
            console.log("key is ", key);
            console.log("keyMap value is", keyMap[key]);
            switch (key) {
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    if (phone.length === 0) {
                        console.log("First number input");
                        phone = "(" + keyMap[key];
                    } else if (phone.length === 4) {
                        console.log("Adding closing brackets");
                        phone += ")" + keyMap[key];
                    } else if (phone.length === 8) {
                        console.log("Adding dash");
                        phone += "-" + keyMap[key];
                    } else {
                        console.log("Adding regular number");
                        phone += key[keyMap];
                    }
                    break;
                default:
                    console.log("Doing nothing");
                    // Do nothing if it is non numeric
                    break;
            }
            console.log("phone value is ", phone);
            $('#phone').val(phone);
        });
    })
});

$(() => {
    console.log("ready!");
});

(function (window) {

    $('#employee-information').submit(function (event) {
        event.preventDefault();
        console.log($('#employee-information'));

        console.log("event is", event);
    })
})(window);