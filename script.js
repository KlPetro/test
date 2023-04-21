/* 
1. Створити візуальну частину
    - створити форму для створення авто
    - створити поле ля відображення парковки
    - створити авто
    - додати декілька авто на парковку

2. Зробити створення авто та додавання на парковку
    - оброблення форми
        - перевірка чи введено число
        - перевірка чи пустий рядок
        - перевірка чи число > 0
    - створити авто
          <div class="car color-red type-1 rotate-90" style="top:20px; left:80px">
                <div class="top"></div>
                <div class="middle"></div>
                <div class="bottom"></div>
            </div
    - додати авто на сторінку, в потрібні координати



3. Зробити рівні парковки


4. Зробити видалення авто
*/

/* обрати поля форми*/
let numbers = document.querySelector("input[name=numbers]");
let color = document.querySelector("select[name=color]");
let type = document.querySelector("select[name=type]");
let place = document.querySelector("select[name=place]");
