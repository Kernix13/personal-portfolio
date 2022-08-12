// http://www.ashleysheridan.co.uk/blog/Making+an+Accessible+Hamburger+Menu

// Hamburger toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", function (event) {
  let menuOpen = nav.classList.contains("nav--visible");
  let newMenuOpenStatus = !menuOpen;

  navToggle.setAttribute("aria-expanded", newMenuOpenStatus);
  nav.classList.toggle("nav--visible");
});
