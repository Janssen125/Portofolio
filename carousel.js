const carousels1 = document.querySelectorAll(".carousel1");
const carousels2 = document.querySelectorAll(".carousel2");
const description = document.getElementById("proj-desc1");
const description2 = document.getElementById("proj-desc2");

if (description) {
    const children = Array.from(description.children);
    let maxHeight = 0;
    Array.from(description.children).forEach(child => {
        maxHeight += child.offsetHeight;
        
    });

  carousels1.forEach(carousel => {
    const slides = carousel.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    images.forEach(img => {
      img.style.height = `${maxHeight}px`;
    });

    let index = 0;

    function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
  });
}

if(description2) {
    const children2 = Array.from(description2.children);
    let maxHeight2 = 0;
    Array.from(description2.children).forEach(child => {
        maxHeight2 += child.offsetHeight;
        
    });

  carousels2.forEach(carousel => {
    const slides = carousel.querySelector(".slides");
    const images = slides.querySelectorAll("img");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    images.forEach(img => {
      img.style.height = `${maxHeight2}px`;
    });

    let index = 0;

    function showSlide(i) {
      index = (i + images.length) % images.length;
      slides.style.transform = `translateX(${-index * 100}%)`;
    }

    prev.addEventListener("click", () => showSlide(index - 1));
    next.addEventListener("click", () => showSlide(index + 1));
  });
}