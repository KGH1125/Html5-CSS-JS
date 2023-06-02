// small 이미지 점프!!!!!!
const a0 = document.querySelector('#s0');
const a = document.querySelector('#s1');
const b = document.querySelector('#s2');
const c = document.querySelector('#s3');
const d = document.querySelector('#s4');
const sl = document.querySelector('.slides');
const vi = document.querySelector('.vidio');

a.addEventListener("click", (e) => {
    sl.style.display = 'block';
    vi.style.display = 'none';
    var i1 = document.querySelector('#img-1');
    i1.checked = true;
});
b.addEventListener("click", (e) => {
    sl.style.display = 'block';
    vi.style.display = 'none';
    var i1 = document.querySelector('#img-2');
    i1.checked = true;
});
c.addEventListener("click", (e) => {
    sl.style.display = 'block';
    vi.style.display = 'none';
    var i1 = document.querySelector('#img-3');
    i1.checked = true;
});
d.addEventListener("click", (e) => {
    sl.style.display = 'block';
    vi.style.display = 'none';
    var i1 = document.querySelector('#img-4');
    i1.checked = true;
});
a0.addEventListener("click", (e) => {
    sl.style.display = 'none';
    vi.style.display = 'block';
});



// 네비
document.getElementById('navBtn').addEventListener('click', () => {
    document.getElementById('navBigBox').classList.toggle('navhidden');
    document.getElementById('bb').classList.toggle('rocatei');
});