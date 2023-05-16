document.cookie = "cookieName=value; SameSite=Strict";

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
// tabs
const tabs = document.querySelectorAll("[data-tab-target]");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
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
// nav year
// JavaScript code
const radioButtons = document.querySelectorAll(
  'input[type="radio"][name="tahun"]'
);
const pages = document.querySelectorAll(".page");

// Hide all pages except the last one
pages.forEach((page, index) => {
  if (index !== pages.length - 1) {
    page.style.display = "none";
  }
});

// Add event listener to radio buttons
radioButtons.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    // Hide all pages
    pages.forEach((page) => (page.style.display = "none"));

    // Show the selected page
    pages[index].style.display = "block";
  });
});
