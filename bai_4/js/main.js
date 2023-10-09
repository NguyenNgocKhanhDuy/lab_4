var textArea = document.getElementById("ta");
var textField = document.getElementById("tf");
var btnResut = document.getElementById("btn");



function count() {
    var taString = textArea.value;
    var tfString = textField.value;

    var count = 0;

    var taListString = taString.split(" ");

    while(taString.includes(tfString)) {
        count++;
        taString = taString.replace(tfString, "");
    }

    alert(`Số lần xuất hiện của dòng trong đoạn văn bản là : ${count}`)
}