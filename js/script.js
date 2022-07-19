// sticky navbar onScroll
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});
// darkmode
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

// menu toggle
const menuToggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  menu.classList.toggle("active");
});

const navMenu = document.querySelectorAll("nav_menu");
menu.addEventListener("click", () => {
  menu.classList.remove("active");
  menuToggle.classList.remove("active");
});

// works tab
let tabHeader = document.querySelector(".tab_nav");
let tabIndicator = document.querySelector(".nav_indicator");
let tabBody = document.querySelector(".tab");

let tabsPane = tabHeader.getElementsByClassName("li");

for (let i = 0; i < tabsPane.length; i++) {
  tabsPane[i].addEventListener("click", function () {
    tabHeader.getElementsByClassName("active")[0].classList.remove("active");
    tabsPane[i].classList.add("active");

    tabBody.getElementsByClassName("active")[0].classList.remove("active");
    tabBody.querySelectorAll(".div")[i].classList.add("active");

    tabIndicator.style.left = "calc(calc(100% / 4) * ${i})";
  });
}
