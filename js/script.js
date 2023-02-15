"use strict";

const navBar = document.querySelector("nav");
const hamburgerMenu = document.querySelector(".hamburger");

// Nav Bar menu Mobile - Desktop
hamburgerMenu.addEventListener("click", function () {
  this.classList.toggle("is-active");
  menu_mobile.classList.toggle("is-open");
  document.body.style.overflow = menu_mobile.classList.contains("is-open")
    ? "hidden"
    : "visible";
});

//Scrolling Event
window.addEventListener("scroll", function () {
  navBar.classList.toggle("sticky", window.scrollY > 0);
});

//Search Button Header
btnSearch.addEventListener("click", function () {
  srchBar.classList.toggle("active-srch");
});

// Search Button Desktop Event
searchBtnDesktop.addEventListener("click", function () {
  searchBarTxtDesktop.value = "";
});
