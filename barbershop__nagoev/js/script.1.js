var link = document.querySelector(".login");

var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");

var close = document.querySelector(".modal-content-close");



var storage = localStorage.getItem("login");


link.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("modal-show");
    login.focus();

    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});
close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});
form.addEventListener("submit", function(event) {
    if(!login.value || !password.value) { //Если значение пустое то вывести
        event.preventDefault();
        popup.classList.add("modal-error");
    } else {
        localStorage.setItem("login",login.value);
    }

});
window.addEventListener("keydown",function(event){
    if (event.keyCode===27) {
        if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        }       
    }
});


var mapOpen = document.querySelector(".js-open-map");
var mapPopup = document.querySelector(".modal-content-map");
var mapClose = mapPopup.querySelector(".modal-content-close");

mapOpen.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(event) {
  event.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      mapPopup.classList.remove("modal-show");
    }
  }
});
// var link = document.querySelector(".login"); 
// link.addEventListener("click", function(){
//     console.log("hello world");
// })
// Document - глобальный объект, корневой элемент DOM дерева страницы
// Три главных слова:
// 1.querySelector() - Метод для поиска элементов
// 2.addEventListener - Метод для отлова событий
// 3.classList -набор методов для управления классами

// 1.Возвращает элемент из DOM - дерева соответствующий CSS - селектору. С помощью обычных css с можно будет находить селекторы. 

// document.(1)querySelector(2)(".user-block")(3);
// 1.document. - где мы будем искать документ (по всему DOM дереву)
// 2.querySelector - метод для поиска элемента
// 3.Передаем методу CSS селектор по которому будем искать

// 1. var link - название переменной, в которой будет находиться, то что мы нашли в правой части (найденный элемент)
// - нельзя обратиться к псевдоклассам и псевдоэлементам

// 2.Отлавливает событие элемента и выполняет переданную функцию - developer.mozilla.org/ru/docs/Web/Events
// link(1).addEventListener(2)("click"(3), function(){}(4));
// 1.Элемент  у которого мы будем ловить событие
// 2.Метод для отлова событий
// 3.Какое событие мы ловим ("клики")
// 4.Функция, которая будет выполняться каждый раз, когда мы ловим событие "клик"
//События бывают : mouse,focus,form events

// Почти у многих элементов на странице есть действие по умолчанию, который можно отменить:
// link.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log("Клик по ссылке вход");
// });

// 3.Набор методов для управления (css)классами элемента
// element.(1)classList.(2)add("modal-show")(3);
// 1.Элемент которому добавляем новый класс
// 2.Свойство, содержащее в себе методы для работы с классами
// // 3. Метод добавления класса
// У classList есть такие методы как:
// .add() - добавление
// .remove() - удаление класса
// .toggle() - переключение класса
// .contains() - сообщает есть ли класс у элемента


// window - Глобальный объект в котором лежит DOM  дерево