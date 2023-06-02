//팝업창 이벤트
const popupBtn2 = document.querySelector("#popupBtn2");
const myform = document.querySelector("#myform");
const closeBtn2 = document.querySelector("#closeBtn2");

popupBtn2.addEventListener("click", function () {
    myform.style.display = "block";
});

closeBtn2.addEventListener("click", function () {
    myform.style.display = "none";
});


//팝업창 이벤트
const popupBtn = document.querySelector("#popupBtn");
const popup = document.querySelector("#popup");
const closeBtn = document.querySelector("#closeBtn");

popupBtn.addEventListener("click", function () {
    popup.style.display = "block";
});

closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
});



submitBtn.addEventListener('click', (event) => {
    // 기본 동작인 폼 전송을 막습니다
    event.preventDefault();

    // 필수 입력란들의 값을 가져옵니다
    const select = document.querySelector('#select');
    const titleInput = document.querySelector('#title');

    const areaInput = document.querySelector('#area');
    const title = titleInput.value.trim();
    const area = areaInput.value.trim();

    // 필수 입력란 중 하나 이상이 비어 있다면, 오류 메시지를 표시하고 전송을 막습니다
    if (!title || !area || !select.value) {
        alert('모든 값을 채우세요.');
        return;
    }

    // 오늘 날짜를 가져옵니다
    const today = new Date().toLocaleDateString();

    // 새로운 row 엘리먼트를 생성합니다
    const tbody = document.querySelector('#myTable tbody');
    const row = document.createElement('tr');

    // row에 td 엘리먼트를 추가합니다
    const td1 = document.createElement('td');
    td1.textContent = tbody.childElementCount + 1;
    const td2 = document.createElement('td');
    td2.textContent = title;
    const td3 = document.createElement('td');
    td3.textContent = today;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);

    // tbody에 row를 추가합니다
    tbody.prepend(row);

    // 입력란들의 값을 초기화합니다
    select.selectedIndex = 0;
    titleInput.value = '';

    areaInput.value = '';
    myform.style.display = "none";
});

// closeBtn2에 클릭 이벤트 핸들러를 추가합니다
closeBtn2.addEventListener('click', () => {
    // form을 초기화합니다
    const form = document.querySelector('#formSub');
    form.reset();
});



const images = [
    'img_team2/qnaBoard_img1.png',
    'img_team2/qnaBoard_img1-2.png',
    'img_team2/qnaBoard_img1-3.png',
    'img_team2/qnaBoard_img1-4.png',
    'img_team2/qnaBoard_img1-5.png',
];

let index = 0;
const mario = document.querySelector('#mario');

function changeImage() {
    mario.src = images[index];

    index = (index + 1) % images.length;
}

setInterval(changeImage, 1500);
