
document.addEventListener("DOMContentLoaded", function () {
const hamContainer = document.querySelector(".ham-container");
const header = document.querySelector(".header");

hamContainer.addEventListener("click", function () {
    header.classList.toggle("active");
});
});
    