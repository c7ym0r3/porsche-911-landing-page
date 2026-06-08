const body = document.querySelector("body");
const burgerBtn = document.querySelector(".header__bars-button");
const nav = document.querySelector(".header__nav-list");
const navItem = document.querySelector(".header__nav-list li");

burgerBtn.addEventListener("click", () => {
  nav.classList.add("active");
  body.classList.add("scroll-block");

  nav.addEventListener("click", () => {
    nav.classList.remove("active");
    body.classList.remove("scroll-block");
  });
});
