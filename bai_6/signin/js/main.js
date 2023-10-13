var email = document.getElementById("username");
var pass = document.getElementById("passsword");
var btnSìgnIn = document.getElementById("btn-signIn");
var emailBoxCheck = document.getElementById("emailBoxCheck");
var passBoxCheck = document.getElementById("passBoxCheck");
var checkEmail = document.getElementById("checkEmail");
var checkPass = document.getElementById("checkPass");
var emailText = document.getElementById("emailText");

email.addEventListener("focus", function (){
    emailBoxCheck.style.display = "none";
});

pass.addEventListener("focus", function (){
    passBoxCheck.style.display = "none";
});

function EMAIL() {

    var emailInput = email.value;
    if (emailInput.length == 0) {
        checkEmail.innerHTML = "Không được để trống";
        emailBoxCheck.style.display = "block";
    }else if(emailInput.includes("@") || emailInput.includes(".com")) {
        if(!emailInput.includes("@")){
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
        }
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

