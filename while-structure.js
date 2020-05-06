function actionButton(){
    var name, age, limit, count;
    limit = prompt("Type here how many times do you want to check")
    count = 0
    while( count < limit) {
        name = prompt("Type the people name here")
        age = prompt("Type here the age of", name, ": ")
        if(age > 18)
        document.getElementById("paragraph").innerText = name + "You are allowed"
        else
        document.getElementById("paragraph").innerText = name + "You are not allowed"
        count++
    }
}

