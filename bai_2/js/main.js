var inputA = document.getElementById("inputA");
var inputB = document.getElementById("inputB");
var inputC = document.getElementById("inputC");
var btnResult = document.getElementById("result");

function solve() {
    var a = parseInt(inputA.value);
    var b = parseInt(inputB.value);
    var c = parseInt(inputC.value);

    var result = 0;

    if (a == 0) {
        if (b == 0 && c == 0){
            result = "Phương trình vô số nghiệm";
        } else if(b == 0 && c != 0) {
            result = "Phương trình vô nghiệm";
        }else{
            result = `Phương trình có 1 nghiệm \nx = ${-c / b}`;
        }
    }else {
        var delta = b*b - (4*a*c);
        if (delta > 0){
            var x1 = (-b + Math.sqrt(delta))/(2*a);
            var x2 = (-b - Math.sqrt(delta))/(2*a);
            result = `Phương trình có 2 nghiệm phân biệt \nx1 = ${x1} \nx2 = ${x2}`;
        }else if (delta == 0){
            result = `Phương trình có nghiệm kép \nx = ${-b/(2*a)}`;
        }else{
            result = "Phương trình vô nghiệm";
        }
    }

    var infoResult = `Thông tin phương trình bậc 2: a = ${a}, b = ${b}, c = ${c} \n${a}x^2 + ${b}x + ${c} = 0 \nKết quả: ${result}`
    alert(infoResult);
}

function solve2(a, b, c) {
    var result = 0;

    if (a == 0) {
        if (b == 0 && c == 0){
            result = "Phương trình vô số nghiệm";
        }else if(b == 0 && c != 0) {
            result = "Phương trình vô nghiệm";
        }else{
            result = `Phương trình có 1 nghiệm \nx = ${-c / b}`;
        }
    }else {
        var delta = b*b - (4*a*c);
        if (delta > 0){
            var x1 = (-b + Math.sqrt(delta))/(2*a);
            var x2 = (-b - Math.sqrt(delta))/(2*a);
            result = `Phương trình có 2 nghiệm phân biệt \nx1 = ${x1} \nx2 = ${x2}`;
        }else if (delta == 0){
            result = `Phương trình có nghiệm kép \nx = ${-b/(2*a)}`;
        }else{
            result = "Phương trình vô nghiệm";
        }
    }

    var infoResult = `Thông tin phương trình bậc 2: a = ${a}, b = ${b}, c = ${c} \n${a}x^2 + ${b}x + ${c} = 0 \nKết quả: ${result}`
    console.log(infoResult);
}