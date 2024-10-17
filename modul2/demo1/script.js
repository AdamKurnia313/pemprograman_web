let displayValue = '';

function appendCharacter(character) {
    displayValue += character;
    document.getElementById('display').value = displayValue;
}

function clearScreen() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        if (displayValue.includes('^')) {
            const parts = displayValue.split('^');
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            displayValue = Math.pow(base, exponent).toString();
        } else {
            displayValue = eval(displayValue).toString();
        }
        document.getElementById('display').value = displayValue;
    } catch (e) {
        document.getElementById('display').value = 'Error';
        displayValue = '';
    }
}
