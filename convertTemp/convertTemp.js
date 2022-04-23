let result = document.getElementById("result");
let cbtn = document.getElementById("cbtn");
let fbtn = document.getElementById("fbtn");
let input = document.getElementById("tempInput");
let subBtn = document.getElementById("subBtn");

subBtn.addEventListener("click", () => {
  if (cbtn.checked) {
    temp = input.value;
    temp = Number(temp);
    temp = convertCelcius(temp);
    result.innerHTML = `Result : ${temp}°C`;
  } else if (fbtn.checked) {
    temp = input.value;
    temp = Number(temp);
    temp = convertFahrenheit(temp);
    result.innerHTML = `Result : ${temp}°F`;
  } else {
    result.innerHTML = `Please select a type !`;
  }
});

function convertCelcius(temp) {
  return (temp - 32) * (5 / 9);
}
function convertFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
