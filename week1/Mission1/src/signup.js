const name = document.getElementById("name");
const nameCheck = document.getElementById("nameCheck");

const email = document.getElementById("email");
const emailCheck = document.getElementById("emailCheck");

const age = document.getElementById("age");
const ageCheck = document.getElementById("ageCheck");

const pw = document.getElementById("password");
const pwCheck = document.getElementById("pwCheck");

const pwconfirm = document.getElementById("pwAgain");
const pwconfirmCheck = document.getElementById("pwAgainCheck");

const openButton = document.getElementById("openModal");
const modal = document.querySelector(".modal");
const closeButton = document.getElementById("closeModal");

const pattern_num = /[0-9]/;    // 숫자 
const pattern_eng = /[a-zA-Z]/; // 문자
const pattern_spc = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자

var valid_name = false;
var valid_email = false;
var valid_age = false;
var valid_pw = false;
var valid_pw_confirm = false;

console.log(openButton);
console.log(modal);
console.log(closeButton);

// Function to show the modal
function showModal() {
    modal.style.display = "flex";
}

// Function to hide the modal
function hideModal() {
    modal.style.display = 'none';
}


// Event listener for closing the modal
closeButton.addEventListener('click', hideModal);


function check() {
    handleSubmit();

    console.log('valid_name:', valid_name);
    console.log('valid_age:', valid_age);
    console.log('valid_email:', valid_email);
    console.log('valid_pw:', valid_pw);
    console.log('valid_pw_confirm:', valid_pw_confirm);
    
    // If all validations pass, show the modal
    if (valid_name && valid_age && valid_email && valid_pw && valid_pw_confirm) {
        showModal();
        console.log('register success');
    }
}

function handleSubmit() {
    // 이름 유효성 검사
    const nameValue = name.value.trim();
    if (nameValue !== '' && isNaN(nameValue)) {
        nameCheck.innerText = "멋진 이름이네요!";
        nameCheck.style.color = "green";
        nameCheck.style.fontSize = "10px";
        valid_name = true;
    } else {
        nameCheck.innerText = "올바른 이름 형식이 아닙니다!";
        nameCheck.style.color = "red";
        nameCheck.style.fontSize = "10px";
    }
    
    // 이메일 유효성 검사
    const emailValue = email.value.trim();
    if (emailValue !== '' && emailValue.includes('@')) {
        emailCheck.innerText = "올바른 이메일 형식입니다!";
        emailCheck.style.color = "green";
        emailCheck.style.fontSize = "10px";
        valid_email = true;
    } else {
        emailCheck.innerText = "올바른 이메일 형식이 아닙니다!";
        emailCheck.style.color = "red";
        emailCheck.style.fontSize = "10px";
    }

    // 나이 유효성 검사
    const ageValue = parseInt(age.value);
    if (!isNaN(ageValue) && Number.isInteger(ageValue) && ageValue >= 19) {
        ageCheck.innerText = "올바른 나이 형식입니다!";
        ageCheck.style.color = "green";
        ageCheck.style.fontSize = "10px";
        valid_age = true;
    } else if (isNaN(ageValue)) {
        ageCheck.innerText = "나이는 숫자 형식이어야 합니다!";
        ageCheck.style.color = "red";
        ageCheck.style.fontSize = "10px";
    } else if (ageValue < 0) {
        ageCheck.innerText = "나이는 음수가 될 수 없습니다!";
        ageCheck.style.color = "red";
        ageCheck.style.fontSize = "10px";
    } else if (ageValue < 19 && ageValue >= 1) {
        ageCheck.innerText = "미성년자는 가입할 수 없습니다!";
        ageCheck.style.color = "red";
        ageCheck.style.fontSize = "10px";
    } else {
        ageCheck.innerText = "나이는 소수가 될 수 없습니다!";
        ageCheck.style.color = "red";
        ageCheck.style.fontSize = "10px";
    }

    // 비밀번호 유효성 검사
    const passwordValue = pw.value;
    if (passwordValue.length < 4) {
        pwCheck.innerText = "비밀번호는 최소 4자리 이상이어야 합니다.";
        pwCheck.style.color = "red";
        pwCheck.style.fontSize = "10px";
    } else if (passwordValue.length > 12) {
        pwCheck.innerText = "비밀번호는 최대 12자리까지 가능합니다.";
        pwCheck.style.color = "red";
        pwCheck.style.fontSize = "10px";
    } else if (!pattern_num.test(passwordValue) || !pattern_spc.test(passwordValue) || !pattern_eng.test(passwordValue)) {
        pwCheck.innerText = "영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.";
        pwCheck.style.color = "red";
        pwCheck.style.fontSize = "10px";
    } else {
        pwCheck.innerText = "올바른 비밀번호입니다!";
        pwCheck.style.color = "green";
        pwCheck.style.fontSize = "10px";
        valid_pw = true;
    }

    // 비밀번호 확인 유효성 검사
    const pwconfirmValue = pwconfirm.value;
    if (valid_pw && pwconfirmValue === passwordValue) {
        pwconfirmCheck.innerText = "비밀번호가 일치합니다!";
        pwconfirmCheck.style.color = "green";
        pwconfirmCheck.style.fontSize = "10px";
        valid_pw_confirm = true;
    } else {
        pwconfirmCheck.innerText = "비밀번호가 일치하지 않습니다.";
        pwconfirmCheck.style.color = "red";
        pwconfirmCheck.style.fontSize = "10px";
        pwconfirmCheck.style.margin = "0";
    }
}


closeButton.onclick=()=> {
    modal.style.display = "none";
    console.log('close');
};