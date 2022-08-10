// http://www.ashleysheridan.co.uk/blog/Making+an+Accessible+Hamburger+Menu
// https://www.section.io/engineering-education/keyboard-events-in-javascript/

"use strict";

// Hamburger toggle
const navToggle = document.getElementById("nav-toggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", function (event) {
  let menuOpen = nav.classList.contains("nav--visible");
  let newMenuOpenStatus = !menuOpen;

  navToggle.setAttribute("aria-expanded", newMenuOpenStatus);
  nav.classList.toggle("nav--visible");
});

// Cards toggle on click and keydown
const flip1 = document.getElementById("card1-flip");
const flip2 = document.getElementById("card2-flip");
const flip3 = document.getElementById("card3-flip");
// const flip4 = document.getElementById("card4-flip");
const flip5 = document.getElementById("card5-flip");

const cards = document.querySelectorAll(".card");
const cardsId = [flip1, flip2, flip3, flip5];

cards.forEach(card => card.addEventListener("click", () => card.classList.toggle("show-answer")));

cardsId.forEach(function (card) {
  card.addEventListener("keydown", function (e) {
    if (e.code !== "Tab") {
      e.preventDefault();
      card.classList.toggle("show-answer");
    }
  });
});
