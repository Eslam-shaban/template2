// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  var items = document.querySelectorAll(".carousel-item");
  var indicators = document.querySelectorAll(".indicator");
  var totalItems = items.length;
  var currentIndex = 1;

  items[currentIndex].classList.add("active");
  indicators[currentIndex].classList.add("active");

  function showSlide(index) {
    items[currentIndex].classList.remove("active");
    indicators[currentIndex].classList.remove("active");
    currentIndex = (index + totalItems) % totalItems;
    items[currentIndex].classList.add("active");
    indicators[currentIndex].classList.add("active");
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  var prevButton = document.querySelector(".prev");
  var nextButton = document.querySelector(".next");

  prevButton.addEventListener("click", function () {
    prevSlide();
  });

  nextButton.addEventListener("click", function () {
    nextSlide();
  });

  indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      showSlide(index);
    });
  });
});
