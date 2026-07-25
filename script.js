const body = document.querySelector("body");
const burgerBtn = document.querySelector(".header__bars-button");
const nav = document.querySelector(".header__nav-list");

if (burgerBtn && nav) {
  const closeMenu = () => {
    nav.classList.remove("active");
    body.classList.remove("scroll-block");
    burgerBtn.setAttribute("aria-expanded", "false");
    burgerBtn.setAttribute("aria-label", "Open menu");
  };

  const openMenu = () => {
    nav.classList.add("active");
    body.classList.add("scroll-block");
    burgerBtn.setAttribute("aria-expanded", "true");
    burgerBtn.setAttribute("aria-label", "Close menu");
  };

  burgerBtn.addEventListener("click", () => {
    const isOpen = nav.classList.contains("active");
    isOpen ? closeMenu() : openMenu();
  });

  // Close on any click inside the nav — link or button (e.g. "Order now"),
  // not just <a> elements as before.
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a, button")) {
      closeMenu();
    }
  });

  // Close on Escape and return focus to the trigger, for keyboard users.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("active")) {
      closeMenu();
      burgerBtn.focus();
    }
  });
}

// Scroll-reveal animation.
// Sections are visible by default (see style.css). We only opt a section
// into the hidden/animated state ONCE we know IntersectionObserver is
// available and we're about to observe it — that way, if this script
// fails to load or run for any reason, the page never gets stuck with
// invisible content.
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
