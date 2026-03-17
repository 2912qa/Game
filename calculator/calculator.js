let currentInput = "";

function appendValue(val) {
    currentInput += val;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = "";
    document.getElementById('result').value = "";
}

function calculateResult() {
    try {
        // evaluate the string as math
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch {
        document.getElementById('result').value = "Error";
        currentInput = "";
    }
}
