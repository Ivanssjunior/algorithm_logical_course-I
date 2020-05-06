var name, grade01, grade02;
name = prompt("Write your name here")
grade01 = prompt("Write your First grade here")
grade02 = prompt("Write your Second grade here")

media = (parseInt(grade01) + parseInt(grade02)) / 2

if(media >= 5){
    alert("Approved" + name)
}

else
    alert("Reproved" + name)
