var username = document.getElementById("username");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var cardNum = document.getElementById("card-number");
var cardCVC = document.getElementById("card-cvc");
var day = document.getElementById("day");
var month = document.getElementById("month");
var year = document.getElementById("year");

var nameBoxCheck = document.getElementById("nameBoxCheck");
var emailBoxCheck = document.getElementById("emailBoxCheck");
var passBoxCheck = document.getElementById("passBoxCheck");
var cardNumBoxCheck = document.getElementById("cardNumBoxCheck");
var cvcBoxCheck = document.getElementById("cvcBoxCheck");
var dobBoxCheck = document.getElementById("dobBoxCheck");

var checkName = document.getElementById("checkName");
var checkEmail = document.getElementById("checkEmail");
var checkPass = document.getElementById("checkPass");
var checkCardNum = document.getElementById("checkCardNum");
var checkCVC = document.getElementById("checkCVC");
var checkDOB = document.getElementById("checkDOB");

var emailText = document.getElementById("emailText");
var cnumberText = document.getElementById("cnumberText");
var cvcText = document.getElementById("cvcText");
var dayText = document.getElementById("dayText");
var monthText = document.getElementById("monthText");
var yearText = document.getElementById("yearText");

email.addEventListener("focus", function (){
    emailBoxCheck.style.display = "none";
});

username.addEventListener("focus", function (){
    nameBoxCheck.style.display = "none";
});

pass.addEventListener("focus", function (){
    passBoxCheck.style.display = "none";
});

cardNum.addEventListener("focus", function (){
    cardNumBoxCheck.style.display = "none";
});

cardCVC.addEventListener("focus", function (){
    cvcBoxCheck.style.display = "none";
});

day.addEventListener("focus", function () {
    dobBoxCheck.style.display = "none";
});

month.addEventListener("focus", function () {
    dobBoxCheck.style.display = "none";
});

year.addEventListener("focus", function () {
    dobBoxCheck.style.display = "none";
});

function EMAIL() {
    var emailInput = email.value;
    if (emailInput.length == 0) {
        checkEmail.innerHTML = "Không được để trống";
        emailBoxCheck.style.display = "block";
    }else if(!emailInput.includes("@")) {
        checkEmail.innerHTML = "Thiếu @";
        emailBoxCheck.style.display = "block";
    }else if(!emailInput.includes(".com")) {
        checkEmail.innerHTML = "Thiếu .com";
        emailBoxCheck.style.display = "block";
    }else if(emailInput.includes("@.")) {
        checkEmail.innerHTML = "Không hợp lệ";
        emailBoxCheck.style.display = "block";
        var index = emailInput.search("@.");
        emailText.innerHTML = emailInput.substring(0, index) + '<span class="red">' + emailInput.substring(index, index+2) + '</span>' + emailInput.substring(index+2);
        emailText.style.zIndex = "1";
        email.style.color = "white";
    }else if (emailInput.includes(".com@")){
        checkEmail.innerHTML = "Không hợp lệ";
        emailBoxCheck.style.display = "block";
        var index = emailInput.search(".com@");
        emailText.innerHTML = emailInput.substring(0, index) + '<span class="red">' + emailInput.substring(index, index+5) + '</span>' + emailInput.substring(index+5);
        emailText.style.zIndex = "1";
        email.style.color = "white";
    }else {
        checkEmail.innerHTML = "";
        emailBoxCheck.style.display = "none";
    }
}

emailText.addEventListener("click", function (){
    emailText.style.zIndex = "-1";
    emailText.textContent = "";
    email.style.color = "black";
    email.focus();
});


function NAME() {
    var nameInput = username.value;
    if (nameInput.length == 0) {
        checkName.innerHTML = "Không được để trống";
        nameBoxCheck.style.display = "block";
    }else {
        checkName.innerHTML = "";
        nameBoxCheck.style.display = "none";
    }
}

function PASS() {
    var passInput = pass.value;
    if (passInput.length == 0) {
        checkPass.innerHTML = "Không được để trống";
        passBoxCheck.style.display = "block";
    }else {
        checkPass.innerHTML = "";
        passBoxCheck.style.display = "none";
    }
}

function CARDNUMBER() {
    var cardNumInput = cardNum.value;
    if (cardNumInput.length == 0) {
        checkCardNum.innerHTML = "Không được để trống";
        cardNumBoxCheck.style.display = "block";
    }else {
        var charCNum = cardNumInput.split("");
        for(var i = 0; i < charCNum.length; i++) {
            if(charCNum[i] < '0' || charCNum[i] > '9') {
                checkCardNum.innerHTML = "Không hợp lệ";
                cardNumBoxCheck.style.display = "block";
                cardNumBoxCheck.style.display = "block";
                cnumberText.innerHTML = cardNumInput.substring(0, i) + '<span class="red">' + cardNumInput.substring(i, i+1) + '</span>' + cardNumInput.substring(i+1);
                cnumberText.style.zIndex = "1";
                cardNum.style.color = "white";
                return;
            }
        }
        checkCardNum.innerHTML = "";
        cardNumBoxCheck.style.display = "none";
    }
}

cnumberText.addEventListener("click", function (){
    cnumberText.style.zIndex = "-1";
    cnumberText.textContent = "";
    cardNum.style.color = "black";
    cardNum.focus();
});

function DOB() {
    var dayInput = day.value;
    var monthInput = month.value;
    var yearInput = year.value;
    if (dayInput.length == 0 || monthInput.length == 0 || yearInput.length == 0) {
        checkDOB.innerHTML = "Không được để trống";
        dobBoxCheck.style.display = "block";
    }else {
        if(yearInput > 0) {
            if(monthInput > 0 && monthInput <= 12){
                var maxDay = 0;
                switch (monthInput) {
                    case "1":
                    case "3":
                    case "5":
                    case "7":
                    case "8":
                    case "10":
                    case "12":
                        maxDay = 31;
                        break;
                    case "4":
                    case "6":
                    case "9":
                    case "11":
                        maxDay = 30;
                        break;
                    case "2":
                        maxDay = namNhuan(yearInput) ? 29:28;
                        break;
                }
                if(!(dayInput > 0 && dayInput <= maxDay)){
                    checkDOB.innerHTML = "Không hợp lệ";
                    dobBoxCheck.style.display = "block";
                    dayText.innerHTML = '<span class="red">' + dayInput+ '</span>'
                    dayText.style.zIndex = "1";
                    day.style.color = "white";
                }
            }else {
                checkDOB.innerHTML = "Không hợp lệ";
                dobBoxCheck.style.display = "block";
                monthText.innerHTML = '<span class="red">' + monthInput+ '</span>'
                monthText.style.zIndex = "1";
                month.style.color = "white";
            }
        }else{
            checkDOB.innerHTML = "Không hợp lệ";
            dobBoxCheck.style.display = "block";
            yearText.innerHTML = '<span class="red">' + yearInput+ '</span>'
            yearText.style.zIndex = "1";
            year.style.color = "white";
        }
    }
}

dayText.addEventListener("click", function (){
    dayText.style.zIndex = "-1";
    dayText.textContent = "";
    day.style.color = "black";
    day.focus();
});

monthText.addEventListener("click", function (){
    monthText.style.zIndex = "-1";
    monthText.textContent = "";
    month.style.color = "black";
    month.focus();
});

yearText.addEventListener("click", function (){
    yearText.style.zIndex = "-1";
    yearText.textContent = "";
    year.style.color = "black";
    year.focus();
});

function namNhuan(yearIn) {
    if(yearIn % 400 === 0 || (yearIn % 4 === 0 && yearIn % 4 !== 0)){
        return true;
    }
    return false;
}

function CVC() {
    var cvcInput = cardCVC.value;
    if (cvcInput.length == 0) {
        checkCVC.innerHTML = "Không được để trống";
        cvcBoxCheck.style.display = "block";
    }else {
        var charCvc = cvcInput.split("");
        for(var i = 0; i < charCvc.length; i++) {
            if(charCvc[i] < '0' || charCvc[i] > '9') {
                checkCVC.innerHTML = "Không hợp lệ";
                cvcBoxCheck.style.display = "block";
                cvcText.innerHTML = cvcInput.substring(0, i) + '<span class="red">' + cvcInput.substring(i, i+1) + '</span>' + cvcInput.substring(i+1);
                cvcText.style.zIndex = "1";
                cardCVC.style.color = "white";
                return;
            }
        }
        checkCVC.innerHTML = "";
        cvcBoxCheck.style.display = "none";
    }
}

cvcText.addEventListener("click", function (){
    cvcText.style.zIndex = "-1";
    cvcText.textContent = "";
    cardCVC.style.color = "black";
    cardCVC.focus();
});