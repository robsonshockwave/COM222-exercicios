const containerImages = document.getElementById("container-images").children;

const zoomIn = document.getElementById("zoom-in");
const zoomOut = document.getElementById("zoom-out");

zoomIn.addEventListener("click", (e) => {
  for (let i = 0; i < containerImages.length; i++) {
    if (containerImages[i].classList.value === "img-normal") {
      containerImages[i].classList.remove("img-normal");
      containerImages[i].classList.add("img-pequena");
    } else if (containerImages[i].classList.value === "img-pequena") {
      containerImages[i].classList.remove("img-pequena");
      containerImages[i].classList.add("img-media");
    } else if (containerImages[i].classList.value === "img-media") {
      containerImages[i].classList.remove("img-media");
      containerImages[i].classList.add("img-grande");
    }
  }
});

zoomOut.addEventListener("click", (e) => {
  for (let i = 0; i < containerImages.length; i++) {
    if (containerImages[i].classList.value === "img-grande") {
      containerImages[i].classList.remove("img-grande");
      containerImages[i].classList.add("img-media");
    } else if (containerImages[i].classList.value === "img-media") {
      containerImages[i].classList.remove("img-media");
      containerImages[i].classList.add("img-pequena");
    } else if (containerImages[i].classList.value === "img-pequena") {
      containerImages[i].classList.remove("img-pequena");
      containerImages[i].classList.add("img-normal");
    }
  }
});
