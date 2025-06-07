const cards = document.querySelectorAll(".panel");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    removeActiveClasses();
    card.classList.add("active");
  });
});

function removeActiveClasses() {
  cards.forEach(function (card) {
    card.classList.remove("active");
  });
}
