let video = document.getElementById("mainVideo");
video.removeAttribute("controls");
video.addEventListener("pause", function () {
    video.play();
});


//새로고침하면 음악 다시 재생

window.onload = function () {
    let music = document.getElementById('mainAudio');
    music.play();
}

// 음악 on off버튼

let music = document.getElementById('mainAudio');
let on = document.getElementById('playON');
let off = document.getElementById('playOFF');

on.addEventListener("click", function () {
    music.play();

});

off.addEventListener("click", function () {
    music.pause();

});


// 한 div당 한 스크롤로

//스크롤제거...
let mHtml = $("html");
let page = 1;
let lastPage = $(".section").length;


mHtml.animate({ scrollTop: 0 }, 10);


$(window).on("wheel", function (e) {
    if (mHtml.is(":animated")) return;
    if (e.originalEvent.deltaY > 0) {
        if (page == lastPage) return;
        page++;
    } else if (e.originalEvent.deltaY < 0) {
        if (page == 1) return;
        page--;
    }
    let posTop = (page - 1) * $(window).height();
    mHtml.animate({ scrollTop: posTop });
})



$(window).on("scroll", function () {
    let img_link = $("#img_main_link");
    let imgPos = img_link.offset().top;
    let winHeight = $(window).height();
    let winTop = $(window).scrollTop();

    let img_zelda = $("#img_main_zelda");
    let img_ganondorf = $("#img_main_ganondorf");

    if (imgPos - winTop < winHeight) {
        img_link.addClass("animation");
        img_zelda.addClass("animation");
        img_ganondorf.addClass("animation");
    } else {
        img_link.removeClass("animation");
        img_zelda.removeClass("animation");
        img_ganondorf.removeClass("animation");
    }

    let winWidth = $(window).width();
    let imgWidth = img_link.width();
    let imgWidth3 = img_ganondorf.width();

    let imgLeft = parseFloat(img_link.css("left"));

    let centerPos = (winWidth - imgWidth) / 2;
    let stopPos = centerPos - imgWidth * 0.4;

    if (winTop + winHeight > imgPos && winTop < imgPos + img_ganondorf.height()) {
        img_link.css("left", stopPos);
        img_zelda.css("right", -imgWidth);
        img_ganondorf.css("left", stopPos);

        // 왼쪽에서 오른쪽으로 이동
        let movePos = imgWidth + imgLeft;
        let ganondorfPos = winWidth - imgWidth3 - movePos;
        img_ganondorf.css("left", ganondorfPos);
    } else {
        img_link.css("left", "");
        img_zelda.css("right", "");
        img_ganondorf.css("left", "");
    }

    // 이미지가 화면 내부에 위치할 때 애니메이션을 적용하는 조건문
    if (winTop + winHeight > imgPos && winTop < imgPos + img_link.height()) {
        // 이미지의 위치를 변경하는 코드
        let percent = ((winTop + winHeight) - imgPos) / (imgPos + winHeight);
        img_ganondorf.css("left", (winWidth - img_ganondorf.width()) * percent + "px");
    }
});




// 링크,젤다 이미지 클릭-> 정보
const linkInfo = document.getElementById('img_main_link');
const lInfo = document.getElementById('img_link_info');
const ltext = document.getElementsByClassName('text_link');

let visible1 = false;

linkInfo.addEventListener('click', () => {
    if (visible1) {
        lInfo.style.display = 'none';
        for (let i = 0; i < ltext.length; i++) {
            ltext[i].style.display = 'none';
        }
        visible1 = false;
    } else {
        lInfo.style.display = 'block';
        for (let i = 0; i < ltext.length; i++) {
            ltext[i].style.display = 'block';
        }
        visible1 = true;
    }
});



const zeldaInfo = document.getElementById('img_main_zelda');
const zInfo = document.getElementById('img_zelda_info');
const ztext = document.getElementsByClassName('text_zelda');

let visible2 = false;

zeldaInfo.addEventListener('click', () => {
    if (visible2) {
        zInfo.style.display = 'none';
        for (let i = 0; i < ztext.length; i++) {
            ztext[i].style.display = 'none';
        }
        visible2 = false;
    } else {
        zInfo.style.display = 'block';
        for (let i = 0; i < ztext.length; i++) {
            ztext[i].style.display = 'block';
        }
        visible2 = true;
    }
});

const ganondorfInfo = document.getElementById('img_main_ganondorf');
const gInfo = document.getElementById('img_ganondorf_info');
const gtext = document.getElementsByClassName('text_ganondorf');

let visible3 = false;

ganondorfInfo.addEventListener('click', () => {
    if (visible3) {
        gInfo.style.display = 'none';
        for (let i = 0; i < gtext.length; i++) {
            gtext[i].style.display = 'none';
        }
        visible3 = false;
    } else {
        gInfo.style.display = 'block';
        for (let i = 0; i < gtext.length; i++) {
            gtext[i].style.display = 'block';
        }
        visible3 = true;
    }
});



//div로 자연스럽게 이동..
const cButton = document.querySelector("#cButton");
const sButton = document.querySelector("#sButton");
const mButton = document.querySelector("#mButton");
const mainImg = document.querySelector("#mainImg");
const storyArea = document.querySelector("#storyArea");
const movieArea = document.querySelector("#movieArea");
const tButton = document.querySelector("#top-logo");
const topArea = document.querySelector("#video-container")






cButton.addEventListener("click", () => {
    smoothScroll(mainImg);
});

sButton.addEventListener("click", () => {
    smoothScroll(storyArea);
});

mButton.addEventListener("click", () => {
    smoothScroll(movieArea);
});
tButton.addEventListener("click", () => {
    smoothScroll(topArea);
});


function smoothScroll(target) {
    const targetPosition = target.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;

    let start = null;


    function animation(currentTime) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }


    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}


// 네비
document.getElementById('navBtn').addEventListener('click', () => {
    document.getElementById('nav').classList.toggle('redback')
    document.getElementById('navBigBox').classList.toggle('navhidden');
    document.getElementById('bb').classList.toggle('rocatei');
});