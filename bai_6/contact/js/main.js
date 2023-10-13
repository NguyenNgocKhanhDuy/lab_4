var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var nameBoxCheck = document.getElementById("nameBoxCheck");
var emailBoxCheck = document.getElementById("emailBoxCheck");
var phoneBoxCheck = document.getElementById("phoneBoxCheck");
var checkName = document.getElementById("checkName");
var checkEmail = document.getElementById("checkEmail");
var checkPhone = document.getElementById("checkPhone");
var emailText = document.getElementById("emailText");
var phoneText = document.getElementById("phoneText");

email.addEventListener("focus", function (){
    emailBoxCheck.style.display = "none";
});

phone.addEventListener("focus", function (){
    phoneBoxCheck.style.display = "none";
});

fullname.addEventListener("focus", function (){
    nameBoxCheck.style.display = "none";
});

function EMAIL() {

    var emailInput = email.value;
    if (emailInput.length == 0) {
        checkEmail.innerHTML = "Không được để trống";
        emailBoxCheck.style.display = "block";
    } else if (!emailInput.includes("@")) {
        checkEmail.innerHTML = "Thiếu @";
        emailBoxCheck.style.display = "block";
    } else if (!emailInput.includes(".com")) {
        checkEmail.innerHTML = "Thiếu .com";
        emailBoxCheck.style.display = "block";
    } else if (emailInput.includes("@.")) {
        checkEmail.innerHTML = "Không hợp lệ";
        emailBoxCheck.style.display = "block";
        var index = emailInput.search("@.");
        emailText.innerHTML = emailInput.substring(0, index) + '<span class="red">' + emailInput.substring(index, index+2) + '</span>' + emailInput.substring(index+2);
        emailText.style.zIndex = "1";
        email.style.color = "white";
    } else if (emailInput.includes(".com@")) {
        checkEmail.innerHTML = "Không hợp lệ";
        emailBoxCheck.style.display = "block";
        var index = emailInput.search(".com@");
        emailText.innerHTML = emailInput.substring(0, index) + '<span class="red">' + emailInput.substring(index, index+5) + '</span>' + emailInput.substring(index+5);
        emailText.style.zIndex = "1";
        email.style.color = "white";
    } else {
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
    var nameInput = fullname.value;
    if (nameInput.length == 0) {
        checkName.innerHTML = "Không được để trống";
        nameBoxCheck.style.display = "block";
    }else {
        checkName.innerHTML = "";
        nameBoxCheck.style.display = "none";
    }
}

function PHONE() {
    var phoneInput = phone.value;

    var charPhone = phoneInput.split("");
    if (charPhone.length >= 9 && charPhone.length <= 10) {
        for(var i = 0; i < charPhone.length; i++) {
            if(!(charPhone[i] >= '0' && charPhone[i] <= '9')){
                checkPhone.innerHTML = "Không hợp lệ";
                phoneBoxCheck.style.display = "block";
                phoneText.innerHTML = phoneInput.substring(0, i) + '<span class="red">' + phoneInput.substring(i, i+1) + '</span>' + phoneInput.substring(i+1);
                phoneText.style.zIndex = "1";
                phone.style.color = "white";
                return;
            }else if(i == charPhone[charPhone.length - 1]){
                checkPhone.innerHTML = "";
                phoneBoxCheck.style.display = "none";
            }
        }
    }else if(charPhone.length == 0){
        checkPhone.innerHTML = "Không được để trống";
        phoneBoxCheck.style.display = "block";
    }else {
        checkPhone.innerHTML = "Không hợp lệ";
        phoneBoxCheck.style.display = "block";
    }
}

phoneText.addEventListener("click", function (){
    phoneText.style.zIndex = "-1";
    phoneText.textContent = "";
    phone.style.color = "black";
    phone.focus();
});