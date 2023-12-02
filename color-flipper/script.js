function changeColor() {
  const colorBox = document.getElementById("colorBox");
  const randomColor = getRandomHexColor();
  colorBox.style.backgroundColor = randomColor;
  colorBox.querySelector("p").textContent = randomColor;
}

function getRandomHexColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
