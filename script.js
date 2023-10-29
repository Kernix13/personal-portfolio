/**
 * MOBILE HAMBURGER MENU
 */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {

  /* Toggle active class */
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");

  /* Toggle aria-expanded value */
  let menuOpen = navMenu.classList.contains("active");
  console.log(menuOpen)
  let newMenuOpenStatus = menuOpen;
  hamburger.setAttribute("aria-expanded", newMenuOpenStatus);
})

// close mobile menu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
//   Need to add Toggle aria-expanded value here as well because it stays as true when you click a menu item
}))

/**
 * BACK TO TOP BUTTON
 */
const backToTopButton = document.querySelector('#back-to-top-btn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    // Show backToTopButton
    if (!backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnExit');
      backToTopButton.classList.add('btnEntrance');
      backToTopButton.style.display = 'block';
    }
  } else {
    // Hide backToTopButton
    if (backToTopButton.classList.contains('btnEntrance')) {
      backToTopButton.classList.remove('btnEntrance');
      backToTopButton.classList.add('btnExit');
      setTimeout(function () {
        backToTopButton.style.display = 'none';
      }, 125);
    }
  }
}

backToTopButton.addEventListener('click', smoothScrollBackToTop);

// function backToTop() {
//   window.scrollTo(0, 0);
// }

function smoothScrollBackToTop() {
  const targetPosition = 0;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 1250;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    window.scrollTo(
      0,
      easeInOutCubic(progress, startPosition, distance, duration)
    );
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t * t + b;
  t -= 2;
  return (c / 2) * (t * t * t + 2) + b;
}