const btns = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

let count = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let type = btn.classList.value;

    if (type.includes("increase")) {
      count++;
    } else if (type.includes("decrease")) {
      count--;
    } else {
      count = 0;
    }

    value.textContent = count;
  });
});
