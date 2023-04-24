/* 
1. Створити візуальну частину
    - створити форму для створення авто
    - створити поле ля відображення парковки
    - створити авто
    - додати декілька авто на парковку

2. Зробити створення авто та додавання на парковку
    - оброблення форми
    
    - створити авто
          <div class="car color-red type-1 rotate-90" style="top:20px; left:80px">
                <div class="top"></div>
                <div class="middle"></div>
                <div class="bottom"></div>
            </div>
    - додати авто на сторінку, в потрібні координати



3. Зробити рівні парковки


4. Зробити видалення авто
*/

/* обрати поля форми*/
let numbers = document.querySelector("input[name=numbers]");
let color = document.querySelector("select[name=color]");
let type = document.querySelector("select[name=type]");
let place = document.querySelector("select[name=place]");
// обрати кнопку
let btnAdd = document.querySelector("#btn-add");

// обираю кнопки рівнів
let btnLvl1 = document.querySelector("#btn-lvl1");
let btnLvl2 = document.querySelector("#btn-lvl2");
let btnLvl3 = document.querySelector("#btn-lvl3");

let titlleLvl = document.querySelector("#block-parking h2");
// обрати блок машин
let carsBlock = 1;
let carsBlock1 = document.querySelector("#cars-1");
let carsBlock2 = document.querySelector("#cars-2");
let carsBlock3 = document.querySelector("#cars-3");

//блок парковки
let parkingBlock = document.querySelector("#block-parking");

// створення масивів координат
let pos = [];

let posLvl1 = [
  { top: "-10px", left: "120px", direction: "horyzontally" },
  { top: "95px", left: "120px", direction: "horyzontally" },
  { top: "200px", left: "120px", direction: "horyzontally" },
  { top: "300px", left: "120px", direction: "horyzontally" },
  { top: "405px", left: "120px", direction: "horyzontally" },
  { top: "-10px", left: "350px", direction: "horyzontally" },
  { top: "95px", left: "350px", direction: "horyzontally" },
  { top: "200px", left: "350px", direction: "horyzontally" },
  { top: "300px", left: "350px", direction: "horyzontally" },
  { top: "405px", left: "350px", direction: "horyzontally" },
];

let posLvl2 = [
  { top: "55px", left: "80px", direction: "anglewise" },
  { top: "180px", left: "80px", direction: "anglewise" },
  { top: "300px", left: "80px", direction: "anglewise" },
  { top: "425px", left: "80px", direction: "anglewise" },
  { top: "545px", left: "80px", direction: "anglewise" },
  { top: "-10px", left: "460px", direction: "horyzontally" },
  { top: "100px", left: "460px", direction: "horyzontally" },
  { top: "210px", left: "460px", direction: "horyzontally" },
  { top: "325px", left: "460px", direction: "horyzontally" },
  { top: "435px", left: "460px", direction: "horyzontally" },
  { top: "550px", left: "460px", direction: "horyzontally" },
  { top: "660px", left: "460px", direction: "horyzontally" },
];

let posLvl3 = [
  { top: "25px", left: "55px" },
  { top: "25px", left: "155px" },
  { top: "25px", left: "260px" },
  { top: "25px", left: "365px" },
  { top: "25px", left: "465px" },
  { top: "25px", left: "575px" },
  { top: "25px", left: "676px" },
  { top: "225px", left: "55px" },
  { top: "225px", left: "155px" },
  { top: "225px", left: "260px" },
  { top: "225px", left: "365px" },
  { top: "225px", left: "465px" },
  { top: "225px", left: "575px" },
  { top: "225px", left: "676px" },
  { top: "425px", left: "55px" },
  { top: "425px", left: "155px" },
  { top: "425px", left: "260px" },
  { top: "425px", left: "365px" },
  { top: "425px", left: "465px" },
  { top: "425px", left: "575px" },
  { top: "425px", left: "676px" },
  { top: "625px", left: "55px" },
  { top: "625px", left: "155px" },
  { top: "625px", left: "260px" },
  { top: "625px", left: "365px" },
  { top: "625px", left: "465px" },
  { top: "625px", left: "575px" },
  { top: "625px", left: "676px" },
];
// функції онклік для кнопків рівнів

btnLvl1.onclick = function () {
  btnLvl1.classList.add("active");
  btnLvl2.classList.remove("active");
  btnLvl3.classList.remove("active");
  carsBlock = carsBlock1;
  carsBlock2.style.display = "none";
  carsBlock3.style.display = "none";
  titlleLvl.style.display = "none";
  carsBlock.style.display = "block";
  pos = posLvl1;
  placeOfParking();
};

btnLvl2.onclick = function () {
  btnLvl1.classList.remove("active");
  btnLvl2.classList.add("active");
  btnLvl3.classList.remove("active");
  carsBlock = carsBlock2;
  carsBlock3.style.display = "none";
  carsBlock1.style.display = "none";
  titlleLvl.style.display = "none";
  carsBlock.style.display = "block";
  pos = posLvl2;
  placeOfParking();
};

btnLvl3.onclick = function () {
  btnLvl1.classList.remove("active");
  btnLvl2.classList.remove("active");
  btnLvl3.classList.add("active");
  carsBlock = carsBlock3;
  carsBlock2.style.display = "none";
  carsBlock1.style.display = "none";
  titlleLvl.style.display = "none";
  carsBlock.style.display = "block";
  pos = posLvl3;
  placeOfParking();
};

//Функція робить кількість мість на паркінгу
function placeOfParking() {
  place.innerHTML = "";
  for (let i = 0; i < pos.length; i++) {
    let html = '<option value="' + i + '">Місце ' + (i + 1) + "</option>";
    place.innerHTML = place.innerHTML + html;
  }
}

// позиції на парковці
// let count = 1;
// let pos1 = { top: "-10px", left: "120px", direction: "horyzontally" };
// let pos2 = { top: "95px", left: "120px", direction: "horyzontally" };
// let pos3 = { top: "200px", left: "120px", direction: "horyzontally" };
// let pos4 = { top: "300px", left: "120px", direction: "horyzontally" };
// let pos5 = { top: "405px", left: "120px", direction: "horyzontally" };
// let pos6 = { top: "-10px", left: "350px", direction: "horyzontally" };
// let pos7 = { top: "95px", left: "350px", direction: "horyzontally" };
// let pos8 = { top: "200px", left: "350px", direction: "horyzontally" };
// let pos9 = { top: "300px", left: "350px", direction: "horyzontally" };
// let pos10 = { top: "405px", left: "350px", direction: "horyzontally" };

// при натисканні на кнопку
btnAdd.onclick = function () {
  // дані про машинку
  let info =
    numbers.value +
    ", колір: " +
    color.value +
    ", Тип: " +
    type.value +
    ", місце: " +
    place.value +
    ".";

  // створюєм машинку
  createCar(numbers.value, color.value, type.value, pos[place.value]);
  //   createCar(numbers.value, color.value, type.value, pos2);
  //   createCar(numbers.value, color.value, type.value, pos3);
  //   createCar(numbers.value, color.value, type.value, pos4);
  //   createCar(numbers.value, color.value, type.value, pos5);
  //   createCar(numbers.value, color.value, type.value, pos6);
  //   createCar(numbers.value, color.value, type.value, pos7);
  //   createCar(numbers.value, color.value, type.value, pos8);
  //   createCar(numbers.value, color.value, type.value, pos9);
  //   createCar(numbers.value, color.value, type.value, pos10);
};

// Функція створення машинки
function createCar(numbers, color, type, place) {
  /* <div class="car color-red type-1 rotate-90" style="top:20px; left:80px">
                <div class="top"></div>
                <div class="middle"></div>
                <div class="bottom"></div>
            </div>
    */

  let html =
    '<div class="car color-' +
    color +
    " type-" +
    type +
    " " +
    place.direction +
    ' " style="top:' +
    place.top +
    "; left:" +
    place.left +
    '">' +
    '<div class="top"></div>' +
    ' <div class="middle">' +
    "<span>" +
    // додавання номера на кришу авто
    numbers +
    "</span>" +
    "</div>" +
    '<div class="bottom"></div>' +
    "</div>";
  // додавання блоку (машинки)
  carsBlock.innerHTML = carsBlock.innerHTML + html;
}

//  по кліку видаляється машинка
parkingBlock.onclick = function (event) {
  console.dir(event);

  //   вибір елемента
  let element = event.target;
  // вибір батька елемента
  let parentElement = element.parentElement;
  // перевірка за допомогою "contains" чи є у батька потрібний клас
  if (parentElement.classList.contains("car")) {
    // Перевірка на видалення авто
    let approve = confirm("Хочеш видалити авто?");
    // якщо є підтвердження то машинка видаляється
    if (approve) {
      // видаляється
      parentElement.remove();
    }
  }
};
