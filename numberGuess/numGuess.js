const randomNum = Math.floor(Math.random() * 100 + 1);

const btn = document.getElementById("btn");
const result = document.getElementById("result");
let guesses = 0;

btn.addEventListener("click", () => {
  const guess = document.getElementById("guessInput").value;

  guesses += 1;

  if (guess > randomNum) {
    result.innerHTML = `Please guess lower !`;
  } else if (guess < randomNum) {
    result.innerHTML = `Please guess higher !`;
  } else {
    result.innerHTML = `You found ${randomNum} correct ! It took you ${guesses} guess ! `;
  }
});
