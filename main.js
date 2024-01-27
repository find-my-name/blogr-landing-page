const menuIcon = document.querySelector(".hamburger");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("open");
  document.querySelector(".mobile-menu").classList.toggle("hidden");
});

const btnsLen = document.querySelectorAll(".cta-btn").length;

const handleClick = (btnNum) => {
  for (i = 1; i <= btnsLen; i++) {
    if (i != btnNum) {
      document
        .querySelector(`.cta-${i}`)
        .nextElementSibling.classList.remove("open");
      document
        .querySelector(`.menu-${i}`)
        .querySelector(".dropdown-list")
        .classList.add("hidden");
    }
  }

  const btn = document.querySelector(`.cta-${btnNum}`);
  const parent = document.querySelector(`.menu-${btnNum}`);

  btn.nextElementSibling.classList.toggle("open");

  parent.querySelector(".dropdown-list").classList.toggle("hidden");
};

const showItems = (btnNum) => {
  for (i = 1; i <= btnsLen; i++) {
    if (i != btnNum) {
      document
        .querySelector(".mobile-menu")
        .querySelector(`.dropdown-${i}`)
        .nextElementSibling.classList.remove("open");
      document
        .querySelector(".mobile-menu")
        .querySelector(`.menu-${i}`)
        .querySelector(".dropdown-list")
        .classList.add("hidden");
    }
  }

  const btn = document.querySelector(`.dropdown-${btnNum}`);
  const parent = document
    .querySelector(".mobile-menu")
    .querySelector(`.menu-${btnNum}`);

  btn.nextElementSibling.classList.toggle("open");

  parent.querySelector(".dropdown-list").classList.toggle("hidden");
};
