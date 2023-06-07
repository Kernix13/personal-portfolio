// http://www.ashleysheridan.co.uk/blog/Making+an+Accessible+Hamburger+Menu

// Hamburger toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", function () {
  /* Toggle aria-expanded value */
  const menuOpen = nav.classList.contains("nav--visible");
  const newMenuOpenStatus = !menuOpen;
  navToggle.setAttribute("aria-expanded", newMenuOpenStatus);

  nav.classList.toggle("nav--visible");
});

// close mobile menu after link click
document.querySelectorAll('.nav__link').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('nav--visible');

    /* Toggle aria-expanded value */
    const menuOpen = nav.classList.contains('nav--visible');
    const newMenuOpenStatus = menuOpen;
    navToggle.setAttribute('aria-expanded', newMenuOpenStatus);
  })
);
