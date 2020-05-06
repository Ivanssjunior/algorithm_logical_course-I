function actionButton() {
    var number, factorial
    number = prompt("Type here the number to calculate")
    factorial = 1
    for (var counter = 1; counter <= number; counter++) {
        factorial = factorial * counter
    }
    document.getElementById("paragraph").innerText = "The factorial of" + number + "its:" + factorial
}
