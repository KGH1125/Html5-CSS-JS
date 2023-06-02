//메뉴바 히든토글
document.getElementById('navBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('hidden');
    document.getElementById('navBtn').classList.toggle('rotate');
});

const big1 = document.getElementById('big1');
const big2 = document.getElementById('big2');
const big3 = document.getElementById('big3');

function bigimg1() {
    big1.style.width = " calc((100% / 2))";
    big2.style.width = " calc((100% / 4))";
    big3.style.width = " calc((100% / 4))";
    document.getElementById('bb1').style.opacity = '0';
}

function bigimg2() {
    big1.style.width = " calc((100% / 4))";
    big2.style.width = " calc((100% / 2))";
    big3.style.width = " calc((100% / 4))";
    document.getElementById('bb2').style.opacity = '0';
}

function bigimg3() {
    big1.style.width = " calc((100% / 4))";
    big2.style.width = " calc((100% / 4))";
    big3.style.width = " calc((100% / 2))";
    document.getElementById('bb3').style.opacity = '0';
}

function reBigbox() {
    big1.style.width = " calc((100% / 3))";
    big3.style.width = " calc((100% / 3))";
    big2.style.width = " calc((100% / 3))";
    document.getElementById('bb1').style.opacity = '1';
    document.getElementById('bb2').style.opacity = '1';
    document.getElementById('bb3').style.opacity = '1';
}

//마우스 올리면 화면 늘어나기
big1.addEventListener('mouseenter', bigimg1);
big2.addEventListener('mouseenter', bigimg2);
big3.addEventListener('mouseenter', bigimg3);
document.getElementById('img1').addEventListener('mouseenter', bigimg1);
document.getElementById('img2').addEventListener('mouseenter', bigimg2);
document.getElementById('img3').addEventListener('mouseenter', bigimg3);

//마우스 때면 화면 초기화
big1.addEventListener('mouseout', reBigbox);
big2.addEventListener('mouseout', reBigbox);
big3.addEventListener('mouseout', reBigbox);



//스크롤하면 섹션 이동
window.onload = function () {
    const elm = document.querySelectorAll('.section');
    const elmCount = elm.length;
    elm.forEach(function (item, index) {
        item.addEventListener('mousewheel', function (event) {
            event.preventDefault();
            let delta = 0;

            if (!event) event = window.event;
            if (event.wheelDelta) {
                delta = event.wheelDelta / 120;
                if (window.opera) delta = -delta;
            }
            else if (event.detail)
                delta = -event.detail / 3;

            let moveTop = window.scrollY;
            let elmSelector = elm[index];

            // wheel down : move to next section
            if (delta < 0) {
                if (elmSelector !== elmCount - 1) {
                    try {
                        moveTop = window.pageYOffset + elmSelector.nextElementSibling.getBoundingClientRect().top;
                    } catch (e) { }
                }
            }
            // wheel up : move to previous section
            else {
                if (elmSelector !== 0) {
                    try {
                        moveTop = window.pageYOffset + elmSelector.previousElementSibling.getBoundingClientRect().top;
                    } catch (e) { }
                }
            }

            const body = document.querySelector('html');
            window.scrollTo({ top: moveTop, left: 0, behavior: 'smooth' });
        });
    });

    arr3[arr2[5]].style.opacity = '0.9';
    arr3[arr2[0]].style.opacity = '0.7';
    arr3[arr2[1]].style.opacity = '0.4';
    arr3[arr2[2]].style.opacity = '0';
    arr3[arr2[3]].style.opacity = '0.4';
    arr3[arr2[4]].style.opacity = '0.7';

}


const left2 = document.getElementById('left2');
const left1 = document.getElementById('left1');
const center = document.getElementById('canter');
const right1 = document.getElementById('right1');
const right2 = document.getElementById('right2');
const ssmoll = document.getElementById('ssmoll');

const left22 = document.getElementById('left22');
const left11 = document.getElementById('left11');
const centerr = document.getElementById('canterr');
const right11 = document.getElementById('right11');
const right22 = document.getElementById('right22');
const ssmolll = document.getElementById('ssmolll');

const arr = [left2, left1, center, right1, right2, ssmoll];
const arr3 = [left22, left11, centerr, right11, right22, ssmolll];

let arr2 = [0, 1, 2, 3, 4, 5];
let a = 0;

document.getElementById('lbtn').addEventListener('click', () => {
    if (a > 5) {
        a = 0;
    };
    arr2.shift();
    arr2.push(a);
    a++;
    rotate1();

})

document.getElementById('rbtn').addEventListener('click', () => {
    a--
    if (a < 0) {
        a = 5;
    };
    arr2.unshift(a);
    arr2.pop();
    rotate2();

})

function rotate1() {
    arr[arr2[5]].classList.replace('left2', 'ssmollbox');
    arr[arr2[0]].classList.replace('left1', 'left2');
    arr[arr2[1]].classList.replace('canter', 'left1');
    arr[arr2[2]].classList.replace('right1', 'canter');
    arr[arr2[3]].classList.replace('right2', 'right1');
    arr[arr2[4]].classList.replace('ssmollbox', 'right2');

    arr3[arr2[5]].style.opacity = '0.9';
    arr3[arr2[0]].style.opacity = '0.7';
    arr3[arr2[1]].style.opacity = '0.4';
    arr3[arr2[2]].style.opacity = '0';
    arr3[arr2[3]].style.opacity = '0.4';
    arr3[arr2[4]].style.opacity = '0.7';
}

function rotate2() {
    arr[arr2[1]].classList.replace('left2', 'left1');
    arr[arr2[2]].classList.replace('left1', 'canter');
    arr[arr2[3]].classList.replace('canter', 'right1');
    arr[arr2[4]].classList.replace('right1', 'right2');
    arr[arr2[5]].classList.replace('right2', 'ssmollbox');
    arr[arr2[0]].classList.replace('ssmollbox', 'left2');

    arr3[arr2[0]].style.opacity = '0.7';
    arr3[arr2[1]].style.opacity = '0.4';
    arr3[arr2[2]].style.opacity = '0';
    arr3[arr2[3]].style.opacity = '0.4';
    arr3[arr2[4]].style.opacity = '0.7';
    arr3[arr2[5]].style.opacity = '0.9';
}

// 네비
document.getElementById('navBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('redback')
    document.getElementById('navBigBox').classList.toggle('navhidden');
    document.getElementById('bb').classList.toggle('rocatei');
    console.log(document.getElementById('navBigBox').classList);
});
