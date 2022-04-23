const circle = document.querySelector(".circle");

circle.addEventListener("mouseover", () => {
  circle.classList.add("hover");
});

circle.addEventListener("mouseleave", () => {
  circle.classList.remove("hover");
});
