"use strict";

const toTopButton = document.getElementById("toTop");
const menuItems = document.querySelectorAll(".menu option");
const dishCards = document.querySelectorAll(".dish");

// scroll to top

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    toTopButton.style.display = "block";
  } else {
    toTopButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// filter dishes

menuItems.forEach((item) => {
  item.onclick = function () {
    menuItems.forEach((item) => {
      item.className = "";
    });
    item.className = "active";

    dishCards.forEach((card) => {
      card.style.display = "none";
      const itemCategory = card.getAttribute("data-category");

      if (itemCategory == item.value.toLowerCase() || item.value == "all") {
        card.style.display = "block";
      }
    });
  };
});
