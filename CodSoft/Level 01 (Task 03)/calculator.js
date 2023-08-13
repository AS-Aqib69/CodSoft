const outputScreen = document.getElementById("outputscreen");

    function display(value) {
        outputScreen.value += value;
    }

    function Clear() {
        outputScreen.value = "";
    }

    function del() {
        outputScreen.value = outputScreen.value.slice(0, -1);
    }

    function Calculate() {
        try {
            outputScreen.value = eval(outputScreen.value);
        } catch (error) {
            outputScreen.value = "Error";
        }
    }