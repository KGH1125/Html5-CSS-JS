const body = document.querySelector('body');
const inDiv = document.querySelector('.in');
const main3Div = document.querySelector('.main3');
const main4Div = document.querySelector('.main4');


//클릭시 말풍선 나오게
body.addEventListener('click', () => {
    inDiv.style.display = 'block';
});

//클릭시 main3(게임소개)으로 이동
inDiv.addEventListener('click', () => {
    main3Div.style.display = 'block';
});

//클릭시 main4(캐릭터소개)로 이동
document.getElementById('main3Img').addEventListener('click', () => {
    document.querySelector('.main4').style.display = 'block';
});


//주민센터로 이동
document.getElementById('main3Img').addEventListener('mouseover', () => {
    main3Img.src = "img_team2/character_12.png";
})

document.getElementById('main3Img').addEventListener('mouseout', () => {
    main3Img.src = "img_team2/character_10.png";
});


const cha0 = document.querySelector('#cha0');
const cha1 = document.querySelector('#cha1');
const cha2 = document.querySelector('#cha2');
const cha3 = document.querySelector('#cha3');
const cha4 = document.querySelector('#cha4');
const cha5 = document.querySelector('#cha5');
const cha6 = document.querySelector('#cha6');
const cha7 = document.querySelector('#cha7');
const cha8 = document.querySelector('#cha8');
const juminImg = document.querySelector('#juminImg');

let currentCha = null;

function resetJuminImg() {
    juminImg.src = 'img_team2/character_77.jpg';
    currentCha = null;
}

cha0.addEventListener('click', () => {
    if (currentCha !== cha0) {
        juminImg.src = 'img_team2/character_100-1.png';
        currentCha = cha0;
    } else {
        resetJuminImg();
    }
});

cha1.addEventListener('click', () => {
    if (currentCha !== cha1) {
        juminImg.src = 'img_team2/character_101-1.png';
        currentCha = cha1;
    } else {
        resetJuminImg();
    }
});

cha2.addEventListener('click', () => {
    if (currentCha !== cha2) {
        juminImg.src = 'img_team2/character_102-1.png';
        currentCha = cha2;
    } else {
        resetJuminImg();
    }
});

cha3.addEventListener('click', () => {
    if (currentCha !== cha3) {
        juminImg.src = 'img_team2/character_103-1.png';
        currentCha = cha3;
    } else {
        resetJuminImg();
    }
});

cha4.addEventListener('click', () => {
    if (currentCha !== cha4) {
        juminImg.src = 'img_team2/character_104-1.png';
        currentCha = cha4;
    } else {
        resetJuminImg();
    }
});

cha5.addEventListener('click', () => {
    if (currentCha !== cha5) {
        juminImg.src = 'img_team2/character_105-1.png';
        currentCha = cha5;
    } else {
        resetJuminImg();
    }
});

cha6.addEventListener('click', () => {
    if (currentCha !== cha6) {
        juminImg.src = 'img_team2/character_106-1.png';
        currentCha = cha6;
    } else {
        resetJuminImg();
    }
});

cha7.addEventListener('click', () => {
    if (currentCha !== cha7) {
        juminImg.src = 'img_team2/character_107-1.png';
        currentCha = cha7;
    } else {
        resetJuminImg();
    }
});

cha8.addEventListener('click', () => {
    if (currentCha !== cha8) {
        juminImg.src = 'img_team2/character_108-1.png';
        currentCha = cha8;
    } else {
        resetJuminImg();
    }
});


