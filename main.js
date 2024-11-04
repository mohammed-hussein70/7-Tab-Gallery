function showImage() {
  let images = document.querySelectorAll(".container .images img");
  let expandImg = document.querySelector(".show  img");
  let show = document.querySelector(".show");
  images.forEach((image, i) => {
    image.onclick = function () {
      expandImg.src = images[i].src;
      show.style.display = "block";
    };
  });
  let close = document.querySelector(".show .closeBtn");
  close.onclick = () => {
    show.style.display = "none";
  };
}
window.onload = showImage();
