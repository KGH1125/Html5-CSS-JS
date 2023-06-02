// 네비
document.getElementById('navBtn').addEventListener('click', () => {
    document.getElementById('navBigBox').classList.toggle('navhidden');
    document.getElementById('bb').classList.toggle('rocatei');
});


//캐릭터 이미지 띄우기

const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');

c1.addEventListener('click', () => {
    document.getElementById(`c1img`).classList.remove('hidden');
})
c2.addEventListener('click', () => {
    document.getElementById(`c2img`).classList.remove('hidden');
})
c3.addEventListener('click', () => {
    document.getElementById(`c3img`).classList.remove('hidden');
})
c4.addEventListener('click', () => {
    document.getElementById(`c4img`).classList.remove('hidden');
})

const mbtn = document.querySelectorAll(".maincbtn");
mbtn.forEach(function (e) {
    e.addEventListener("click", allhiden);
});

function allhiden() {
    document.getElementById(`c1img`).classList.add('hidden');
    document.getElementById(`c2img`).classList.add('hidden');
    document.getElementById(`c3img`).classList.add('hidden');
    document.getElementById(`c4img`).classList.add('hidden');
    console.log('aa')
}


//캐릭터 이미지 마우스오버하면 배경움직임
c1.addEventListener('mouseover', () => {
    c1.classList.add('moveback');
})
c2.addEventListener('mouseover', () => {
    c2.classList.add('moveback');
})
c3.addEventListener('mouseover', () => {
    c3.classList.add('moveback');
})
c4.addEventListener('mouseover', () => {
    c4.classList.add('moveback');
})
c1.addEventListener('mouseout', () => {
    c1.classList.remove('moveback');
})
c2.addEventListener('mouseout', () => {
    c2.classList.remove('moveback');
})
c3.addEventListener('mouseout', () => {
    c3.classList.remove('moveback');
})
c4.addEventListener('mouseout', () => {
    c4.classList.remove('moveback');
})




