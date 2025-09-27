const carousels1 = document.querySelectorAll(".carousel1");
const carousels2 = document.querySelectorAll(".carousel2");

carousels1.forEach(carousel => {
  const slides = carousel.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  let index = 0;

  function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prev.addEventListener("click", () => {
      showSlide(index - 1);
      resetAutoScroll();
  });
  next.addEventListener("click", () => {
      showSlide(index + 1);
      resetAutoScroll();
  });

  // Auto scroll
  let autoScroll = setInterval(() => {
      showSlide(index + 1);
  }, 3000);


  function resetAutoScroll() {
      clearInterval(autoScroll);
      autoScroll = setInterval(() => {
          showSlide(index + 1);
      }, 3000);
  }
});

carousels2.forEach(carousel => {
  const slides = carousel.querySelector(".slides");
  const images = slides.querySelectorAll("img");
  const prev = carousel.querySelector(".prev");
  const next = carousel.querySelector(".next");

  let index = 0;

  function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
  }

  prev.addEventListener("click", () => {
      showSlide(index - 1);
      resetAutoScroll();
  });
  next.addEventListener("click", () => {
      showSlide(index + 1);
      resetAutoScroll();
  });

  // Auto scroll
  let autoScroll = setInterval(() => {
      showSlide(index + 1);
  }, 3000);

  function resetAutoScroll() {
      clearInterval(autoScroll);
      autoScroll = setInterval(() => {
          showSlide(index + 1);
      }, 3000);
  }
});