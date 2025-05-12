function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function setRandomColors() {
  const color1 = getRandomColor();
  const color2 = getRandomColor();
  const color3 = getRandomColor();
  const color4 = getRandomColor();

  document.querySelector('.circle').style.boxShadow = `
    inset 0 0 50px #ffffff,
    inset 10px 0 100px ${color1},
    inset -10px 0 100px ${color2},
    inset 0 10px 100px ${color3},
    inset 0 -10px 100px ${color4},
    0 0 50px #ffffff,
    -10px 0 60px ${color1},
    10px 0 60px ${color2}`;
}

setInterval(setRandomColors, 500);