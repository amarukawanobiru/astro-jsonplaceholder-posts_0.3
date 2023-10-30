// ***** ***** ***** setFillHeight()
const setFillHeight = () => {
  const viewHeight = window.innerHeight * 0.01;
  document.documentElement.style.setProperty(
    "--view-height",
    `${viewHeight}px`
  );
};

// ***** ***** ***** Hamburger menu
const $hamburger = document.querySelector(".hamburger");
const $drawerMenu = document.querySelector(".drawer-menu");

$hamburger.addEventListener("click", () => {
  $hamburger.classList.toggle("js-active");
  $drawerMenu.classList.toggle("js-active");
});

window.addEventListener("load", () => {
  setFillHeight();

  const drawerMenuHeiht = $drawerMenu.scrollHeight;
  document.documentElement.style.setProperty(
    "--drawerMenu-height",
    `${drawerMenuHeiht}px`
  );
});

window.addEventListener("resize", () => {
  setFillHeight();
});
