const body = document.querySelector("body");
const burgerBtn = document.querySelector(".header__menu");
const nav = document.querySelector(".menu__main");

if (burgerBtn && nav) {
  const closeMenu = () => {
    nav.style.transform = "translateX(-100%)";
    body.classList.remove("scroll-block");
    burgerBtn.setAttribute("aria-expanded", "false");
    burgerBtn.setAttribute("aria-label", "Open menu");
  };

  const openMenu = () => {
    nav.style.transform = "translateX(0)";
    body.classList.add("scroll-block");
    burgerBtn.setAttribute("aria-expanded", "true");
    burgerBtn.setAttribute("aria-label", "Close menu");
  };

  burgerBtn.addEventListener("click", () => {
    const isOpen = burgerBtn.getAttribute("aria-expanded") === "true";
    isOpen ? closeMenu() : openMenu();
  });

  // Закрытие при нажатии на ссылку или кнопку внутри меню
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      closeMenu();
    }
  });

  // Закрытие по Escape с возвратом фокуса на бургер
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      burgerBtn.getAttribute("aria-expanded") === "true"
    ) {
      closeMenu();
      burgerBtn.focus();
    }
  });
}

const sections = document.querySelectorAll("main > section");

if (sections.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
}
