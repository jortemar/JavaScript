const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

// const container = document.getElementById("container");

img1.addEventListener("mouseenter", () => {
  img1.style.zIndex = 2;
  img2.style.zIndex = 1;
  img3.style.zIndex = 1;
  img4.style.zIndex = 1;
});

img2.addEventListener("mouseenter", () => {
  img1.style.zIndex = 1;
  img2.style.zIndex = 2;
  img3.style.zIndex = 1;
  img4.style.zIndex = 1;
});

img3.addEventListener("mouseenter", () => {
  img1.style.zIndex = 1;
  img2.style.zIndex = 1;
  img3.style.zIndex = 2;
  img4.style.zIndex = 1;
});

img4.addEventListener("mouseenter", () => {
  img1.style.zIndex = 1;
  img2.style.zIndex = 1;
  img3.style.zIndex = 1;
  img4.style.zIndex = 2;
});