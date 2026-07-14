const body = document.querySelector("body");
const burgerBtn = document.querySelector(".header__bars-button");
const nav = document.querySelector(".header__nav-list");

if (burgerBtn && nav) {
  burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
    body.classList.toggle("scroll-block");
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      nav.classList.remove("active");
      body.classList.remove("scroll-block");
    }
  });
}

const sections = document.querySelectorAll("main > section");

if (sections.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((section) => observer.observe(section));
}
