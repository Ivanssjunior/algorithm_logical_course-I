function actionButton(){
    var outloop, value01, value02;
    do {
        value01 = prompt("Type your first value")
        value02 = prompt("Type your second value")
        document.getElementById("paragraph").innerText = "Results: " + (parseInt( value01 ) + parseInt( value02 ) )
        outloop = prompt("Do you want to get out of the loop? S/N")
    }while(outloop == "N")
}

