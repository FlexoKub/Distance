const menuBtn = document.querySelector(".m-menu");
const menu = document.querySelector(".menu-sidebar");

menuBtn.addEventListener("click", function () { //прослушиваем на клик и выполняем функцию
    menu.classList.toggle("active"); // добавляем или убираем класс active
});