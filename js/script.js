// Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
// ketika villamenu di klik
document.querySelector("#villa-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik di luar sidebar untuk menghilangkan nav
const villa = document.querySelector("#villa-menu");

document.addEventListener("click", function (e) {
  if (!villa.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
