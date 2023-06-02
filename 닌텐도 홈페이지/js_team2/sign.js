
let box1_1 = document.getElementById("box1-1-1");
let charImg1_1 = document.getElementById("charImg1-1");

box1_1.addEventListener("click", function() {
  charImg1_1.classList.add("bounce");
  setTimeout(function() {
    window.location.href = "sign_main.html";
  }, 850);
  box1_1.classList.add("bounceBox");
});

let box1_2 = document.getElementById("box1-2-1");
let charImg1_2 = document.getElementById("charImg1-2");

box1_2.addEventListener("click", function() {
  charImg1_2.classList.add("bounce");
  setTimeout(function() {
    window.location.href = "sign_main.html";
  }, 850);
  box1_2.classList.add("bounceBox");
});
// 네비
document.getElementById('navBtn').addEventListener('click', () => {
  document.getElementById('navBigBox').classList.toggle('navhidden');
  document.getElementById('bb').classList.toggle('rocatei');
});