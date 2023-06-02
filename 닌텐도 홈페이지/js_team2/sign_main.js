let idflag = false;
let pwflag = false;
let pw2flag = false;
let emflag = false;


const userId = document.querySelector('#userId');
const idMsg = document.querySelector('#idMsg');

function checkFormValidity() {
    if (idflag && pwflag && pw2flag && emflag) {
        signBtn.disabled = false;
        signBtn.style.color = 'red';
    } else {
        signBtn.disabled = true;
        signBtn.style.color = '';
    }
}


userId.addEventListener('keyup', function () {

    const pattern = /^[a-z]+[a-z0-9]{5,11}$/g;

    if (userId.value === '') {
        idMsg.innerHTML = `아이디는 6자 이상이어야 합니다.`;
        idMsg.style.color = 'rgb(86, 83, 83)';
    } else {


        if (!pattern.test(userId.value)) {
            idMsg.innerHTML = '영문 소문자로 시작하는 6~12자리의 아이디를 입력하세요';
            idMsg.style.color = 'red';
            idflag = false;
        } else {
            idflag = true;
            idMsg.innerHTML = `<span class="material-symbols-outlined">check</span>올바른 형식입니다.`;
            idMsg.style.color = 'rgb(86, 83, 83)';
            console.log(idflag);

        }
    } checkFormValidity();
});


const userPassword = document.querySelector('#userPassword');
const passwordMsg = document.querySelector('#passwordMsg');

userPassword.addEventListener('keyup', function () {

    const pattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;;
    if (!pattern.test(userPassword.value)) {
        passwordMsg.innerHTML = '숫자와 특수문자를 포함한 8자 이상의 비밀번호를 입력하세요.'
        passwordMsg.style.color = 'red';
        pwflag = false;


    } else {
        pwflag = true;
        passwordMsg.innerHTML = `<span class="material-symbols-outlined">check</span>올바른 형식입니다.`;
        passwordMsg.style.color = 'rgb(86, 83, 83)';

        console.log(pwflag);

    } checkFormValidity();
})


let userPasswordc = document.querySelector('#userPasswordc');
let passworConfirmdMsg = document.querySelector('#passworConfirmdMsg');

userPasswordc.addEventListener('keyup', function () {


    if (userPasswordc.value === '') {
        passworConfirmdMsg.innerHTML = `숫자와 특수문자를 포함한 8자 이상`;
        passworConfirmdMsg.style.color = 'rgb(86, 83, 83)';


    } else {
        if (userPassword.value !== userPasswordc.value) {
            passworConfirmdMsg.innerHTML = `비밀번호가 일치하지 않습니다.`
            passworConfirmdMsg.style.color = 'red';
            pw2flag = false;


        } else if (userPassword.value === userPasswordc.value) {
            pw2flag = true;
            passworConfirmdMsg.innerHTML = `<span class="material-symbols-outlined">check</span>비밀번호가 일치합니다.`;
            passworConfirmdMsg.style.color = 'rgb(86, 83, 83)';
            console.log(pwflag);


        }


    } checkFormValidity();
});

const userEmail = document.querySelector('#userEmail');
const emailMsg = document.querySelector('#emailMsg');

userEmail.addEventListener('input', function () {
    const pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!pattern.test(userEmail.value)) {
        emailMsg.innerHTML = `알맞은 이메일을 입력해주세요.`;
        emailMsg.style.color = 'red';
        emflag = false;
    } else {
        emflag = true;
        emailMsg.innerHTML = `<span class="material-symbols-outlined">check</span>올바른 형식입니다.`;
        emailMsg.style.color = 'rgb(86, 83, 83)';
        console.log(emflag);
    } checkFormValidity();

});


const signBtn = document.querySelector('#signBtn');

if (idflag == true && pwflag == true && pw2flag == true && emflag == true) {
    signBtn.disabled = false;
    signBtn.style.color = 'black';
    signBtn.style.setProperty('background-color', 'red', 'important');

} else {
    signBtn.disabled = true;
    signBtn.style.color = '';
    signBtn.style.backgroundColor = '';

}
// 네비
document.getElementById('navBtn').addEventListener('click', () => {
    document.getElementById('navBigBox').classList.toggle('navhidden');
    document.getElementById('bb').classList.toggle('rocatei');
});