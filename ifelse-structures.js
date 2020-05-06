function actionButton() {
    var valor01, valor02, result, operation;
    valor01 = prompt("Write your value here")
    valor02 = prompt("Write your second value here")
    operation = prompt("Write your operation here. Ex. +, -, *, /")

    if( operation == "+") {
        result = parseInt(valor01) + parseInt(valor02)
    } else if (operation == "-" ) {
        result = parseInt(valor01) - parseInt(valor02)
    } else if (operation == "*" ){
        result = parseInt(valor01) * parseInt(valor02)
    } else if (operation == "/" ){
        result = parseInt(valor01) / parseInt(valor02)
    }  
    document.getElementById("paragraph").innerText = name + " : " + result
}
