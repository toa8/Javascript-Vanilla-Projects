let players = [
  {
    img: "img/ronaldo.jpg",
    name: "Cristiano Ronaldo",
    text: " Portuguese professional footballer who plays as a forward.",
  },
  {
    img: "img/messi.jpg",
    name: "Lionel Messi",
    text: "Argentinian professionel footballer who plays as a forward",
  },
  {
    img: "img/ronaldinho.jpg",
    name: "Ronaldinho",
    text: "Brazilian retired footballer who plays as left wing",
  },
];

let img = document.getElementById("img");
let title = document.getElementById("title");
let text = document.getElementById("text");

const nextBtn = document.getElementById("nextBtn");
const previousBtn = document.getElementById("previousBtn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPlayers(currentItem);
});

const showPlayers = (player) => {
  let item = players[player];
  img.src = item.img;
  title.textContent = item.name;
  text.textContent = item.text;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > players.length - 1) {
    currentItem = 0;
  }
  showPlayers(currentItem);
});

previousBtn.addEventListener("click", () => {
  currentItem--;
  console.log(currentItem);
  if (currentItem < 0) {
    currentItem = players.length - 1;
  }
  showPlayers(currentItem);
});
