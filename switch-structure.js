function actionButton() {
    var valor01, valor02, result, operation;
    valor01 = prompt("Write your value here")
    valor02 = prompt("Write your second value here")
    operation = prompt("Write your operation here. Ex. +, -, *, /")
    switch (operation) {
        case "+":
            result = parseInt(valor01) + parseInt(valor02)
            break;
        case "-":
            result = parseInt(valor01) - parseInt(valor02)
            break;
        case "*":
            result = parseInt(valor01) * parseInt(valor02)
            break;
        case "/":
            result = parseInt(valor01) / parseInt(valor02)
            break; 
        }
    document.getElementById("paragraph").innerText = name + " : " + result
}
