// ***** ***** ***** setFillHeight()
const setFillHeight = () => {
  const viewHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(
    "--view-height",
    `${viewHeight}px`
  );
};

window.addEventListener("load", () => {
  setFillHeight();
});

window.addEventListener("resize", () => {
  setFillHeight();
});

// ***** ***** ***** Hamburger menu
const $hamburger = document.querySelector(".hamburger");
const $drawerMenu = document.querySelector(".drawer-menu");
const drawerMenuHeiht = $drawerMenu.scrollHeight;

document.documentElement.style.setProperty(
  "--drawerMenu-height",
  `${drawerMenuHeiht}px`
);

$hamburger.addEventListener("click", () => {
  $hamburger.classList.toggle("js-active");
  $drawerMenu.classList.toggle("js-active");
});
