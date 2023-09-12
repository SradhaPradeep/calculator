function calc(value) {
    document.getElementById("result").value += value;
}
function clearResult() {
    document.getElementById("result").value = "";
}
function calculate() {
    var expression = document.getElementById("result").value;
    var result = eval(expression);
    document.getElementById("result").value = result;
}
function clearValue() {
    var currentInput = document.getElementById("result").value;
    if (currentInput.length > 0) {
        document.getElementById("result").value = currentInput.slice(0, -1);
    }
}