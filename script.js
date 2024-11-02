let display = document.getElementById("display");

function insert(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let expression = display.value.replace('^', '**');
    try {
        display.value = eval(expression);
    } catch (error) {
        display.value = "Error";
    }
}

function calculateFactorial() {
    let number = parseInt(display.value);
    if (isNaN(number) || number < 0) {
        display.value = "Error";
        return;
    }
    display.value = factorial(number);
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}