var buttonsList = document.getElementsByClassName("btn");
var text = [];

for(var i = 0; i < buttonsList.length; i++) {
    text[i] = (i+1);
}

for(var i = 0; i < buttonsList.length; i++) {
    var random = Math.floor(Math.random()*text.length);
    buttonsList[i].textContent = text[random];
    text = text.filter(function (value, index, array){
        return index != random;
    });
}

var count = 0;
for(var i = 0; i < buttonsList.length; i++){
    buttonsList[i].addEventListener("click", function (){

        count++;
        if(count == this.textContent){
            this.style.visibility = "hidden";
        }else {
            alert("Tro choi ket thuc");
            count--;
        }
    });
}

