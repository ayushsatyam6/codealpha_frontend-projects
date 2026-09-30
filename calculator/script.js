let display = document.getElementById("display");


// Add value to display

function appendValue(value) {

    if (display.value === "0") {

        display.value = value;

    } else {

        display.value += value;

    }
}


// Clear calculator

function clearDisplay() {

    display.value = "0";

}


// Delete last character

function deleteLast() {

    if (display.value.length > 1) {

        display.value =
            display.value.slice(0, -1);

    } else {

        display.value = "0";

    }
}


// Calculate result

function calculate() {

    try {

        let expression = display.value;

        let result = eval(expression);

        display.value = result;

    } catch {

        display.value = "Error";

    }

}