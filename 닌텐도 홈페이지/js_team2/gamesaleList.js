/*
div사이즈 동적으로 구하기
*/
const outer = document.querySelector('.outer');
const innerList = document.querySelector('.inner-list');
const inners = document.querySelectorAll('.inner');
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
})

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  주기적으로 화면 넘기기
*/
const getInterval = () => {
  return setInterval(() => {
    inners.forEach((inner) => {
      inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
    })

    innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 2000);
}

let interval = getInterval(); // interval 등록

//오름차순 정렬

let products = [
  { id: 0, price: 74800, title: "젤다의 전설", img: "img_team2/1-1.jpg", link: "saleDetail1.html" },
  { id: 1, price: 45360, title: "마리오 카트", img: "img_team2/2-1.jpg", link: "saleDetail2.html" },
  { id: 2, price: 99600, title: "포켓몬스터", img: "img_team2/3-1.jpg", link: "saleDetail3.html" },
  { id: 3, price: 64800, title: "동물의 숲", img: "img_team2/4-1.jpg", link: "saleDetail4.html" },
  { id: 4, price: 12000, title: "커비의 드림 뷔페", img: "img_team2/5-1.jpg", link: "saleDetail5.html" },
  { id: 5, price: 76800, title: "슈퍼로봇대전 T", img: "img_team2/6-1.jpg", link: "saleDetail6.html" },
  { id: 6, price: 44800, title: "목장이야기", img: "img_team2/7-1.jpg", link: "saleDetail7.html" },
  { id: 7, price: 19800, title: "그림자 복도", img: "img_team2/8-1.jpg", link: "saleDetail8.html" },
  { id: 8, price: 64800, title: "레츠고! 이브이", img: "img_team2/9-1.jpg", link: "saleDetail9.html" },

];
// 컨테이너
const CardsContainer = document.querySelector(".container");

// 버튼
const BtnContainer = document.querySelector(".shop__buttonContainer");
const LowPriceBtn = document.querySelector("#button1");
const BasicBtn = document.querySelector("#button2");
const ABCBtn = document.querySelector("#button3");
// HTML
const ShopCard = `
<div class="shop__card" id="0">
    <div class="textbox">
        <div id='a'><div>
        <p class="title"></p>
        <p><span class="price"></span>원</p>
    </div>
</div>

<div id='b'>
  <button class="order">주문하기</button>
</div>

</div>
</div>`;


// 초기 배열
for (i = 0; i < products.length; i++) {

  CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
  const CardsTitle = document.querySelectorAll(".title");
  const CardsPrice = document.querySelectorAll(".price");
  const CardsImage = document.querySelectorAll(".shop__card");

  CardsPrice[i].insertAdjacentHTML("beforeend", `${products[i].price}`);
  CardsTitle[i].insertAdjacentHTML("beforeend", `<a id="alink" target="_blank" href="${products[i].link}">
    ${products[i].title}</a>`);
  CardsImage[i].insertAdjacentHTML("afterbegin", `<a id="aaaaa" target="_blank" href="${products[i].link}">
  <img src="${products[i].img}"></a>`);

}

// 오름차순
function ProductSortUp() {
  while (CardsContainer.hasChildNodes()) {
    CardsContainer.removeChild(CardsContainer.firstChild);
  }
  const NewProducts = [...products];
  NewProducts.sort(function (a, b) {
    return a.price - b.price;
  });
  for (i = 0; i < NewProducts.length; i++) {
    CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
    const CardsTitle = document.querySelectorAll(".title");
    const CardsPrice = document.querySelectorAll(".price");
    CardsPrice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
    CardsTitle[i].insertAdjacentHTML("beforeend", `<a id="alink" target="_blank" href="${NewProducts[i].link}">
    ${NewProducts[i].title}</a>`);
    const CardsImage = document.querySelectorAll(".shop__card");
    CardsImage[i].insertAdjacentHTML("afterbegin", `<a id="aaaaa" target="_blank" href="${NewProducts[i].link}">
    <img src="${NewProducts[i].img}"></a>`);
  }
}
//가나다순
function ProductABC() {
  while (CardsContainer.hasChildNodes()) {
    CardsContainer.removeChild(CardsContainer.firstChild);
  }
  const NewProducts = [...products];
  NewProducts.sort(function (a, b) {
    if (a.title < b.title) return -1;
    else if (a.title == b.title) return 0;
    else return 1;
  });
  for (i = 0; i < products.length; i++) {
    CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
    const CardsTitle = document.querySelectorAll(".title");
    const CardsPrice = document.querySelectorAll(".price");
    CardsPrice[i].insertAdjacentHTML("beforeend", `${NewProducts[i].price}`);
    CardsTitle[i].insertAdjacentHTML("beforeend", `<a id="alink" target="_blank" href="${NewProducts[i].link}">
    ${NewProducts[i].title}</a>`);
    const CardsImage = document.querySelectorAll(".shop__card");
    CardsImage[i].insertAdjacentHTML("afterbegin", `<a id="aaaaa" target="_blank" href="${NewProducts[i].link}">
    <img src="${NewProducts[i].img}"></a>`);
  }
}
// 초기 배열로 되돌리기
function ProductBasic() {
  while (CardsContainer.hasChildNodes()) {
    CardsContainer.removeChild(CardsContainer.firstChild);
  }
  for (i = 0; i < products.length; i++) {
    CardsContainer.insertAdjacentHTML("beforeend", ShopCard);
    const CardsTitle = document.querySelectorAll(".title");
    const CardsPrice = document.querySelectorAll(".price");
    CardsPrice[i].insertAdjacentHTML("beforeend", `${products[i].price}`);
    CardsTitle[i].insertAdjacentHTML("beforeend", `<a id="alink" target="_blank" href="${products[i].link}">
    ${products[i].title}</a>`);
    const CardsImage = document.querySelectorAll(".shop__card");
    CardsImage[i].insertAdjacentHTML("afterbegin", `<a id="aaaaa" target="_blank" href="${products[i].link}">
    <img src="${products[i].img}"></a>`);
  }
}

// 버튼의 경우
BtnContainer.addEventListener("click", (e) => {
  if (e.target == LowPriceBtn) {
    ProductSortUp();
  } else if (e.target == BasicBtn) {
    ProductBasic();
  } else if (e.target == ABCBtn) {
    ProductABC();
  }
});

