let displayValue = '';
let stepsValue = '';

function appendValue(value) {
    displayValue += value;
    stepsValue += value;
    document.getElementById('display').value = displayValue;
    document.getElementById('steps').innerText = stepsValue;
}

function calculate() {
    try {
        displayValue = eval(displayValue);
        stepsValue += "=" + displayValue;
        document.getElementById('display').value = displayValue;
        document.getElementById('steps').innerText = stepsValue;
    } catch (error) {
        displayValue = '';
        document.getElementById('display').value = 'Error';
        document.getElementById('steps').innerText = '';
    }
}

function clearDisplay() {
    displayValue = '';
    stepsValue = '';
    document.getElementById('display').value = displayValue;
    document.getElementById('steps').innerText = stepsValue;
}

function removeLastCharacter() {
    displayValue = displayValue.slice(0, -1);
    stepsValue = stepsValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
    document.getElementById('steps').innerText = stepsValue;
}