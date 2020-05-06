var name, grade01, grade02, approved;

approved = false;

name = prompt("Write your name here")
grade01 = prompt("Write your first grade here")
grade02 = prompt("Write your second grade here")

media = (parseInt(grade01) + parseInt(grade02)) / 2

if(media >= 50)
    approved = true;

if(approved && (media >= 70 && media <= 90))
    alert("Aprroved!") + name
else
    alert("Reproved!" + name)
    
