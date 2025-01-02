let display = document.getElementById('display');
let currentOperation = null;
let previousValue = '';

function appendToDisplay(value) {
    display.innerText += value;
}

function clearDisplay() {
    display.innerText = '';
    currentOperation = null;
    previousValue = '';
}

function performOperation(operation) {
    if (display.innerText === '') return;
    previousValue = display.innerText;
    currentOperation = operation;
    display.innerText = '';
}

function calculate() {
    if (currentOperation === null || display.innerText === '') return;
    let currentValue = parseFloat(display.innerText);
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(previousValue) + currentValue;
            break;
        case '-':
            result = parseFloat(previousValue) - currentValue;
            break;
        case '×':
            result = parseFloat(previousValue) * currentValue;
            break;
        case '÷':
            result = parseFloat(previousValue) / currentValue;
            break;
        default:
            return;
    }
    display.innerText = result;
    currentOperation = null;
    previousValue = '';
}
