let step__x = 2;
let step__y = 2;

function move() {
  let svg = document.querySelector("svg");
  console.log(svg)
  let img = document.querySelector("image")
  console.log(img)
  let width = parseInt(svg.getAttribute('width'));
  let height = parseInt(svg.getAttribute("height"));
  let x = parseInt(img.getAttribute("x"))
  let y = parseInt(img.getAttribute("y"))

  console.log(x, y)
  x += step__x;
  y += step__y;
  if (y + 50 >= height) {
    step__y = -step__y
  }
  if (x + 100 >= width) {
    step__x = -step__x
  }
  if (x <= 0) {
    step__x = -step__x
  }
  if (y <= 0) {
    step__y = -step__y
  }
  img.setAttribute("x", x);
  img.setAttribute("y", y);
}
move()

setInterval(move, 10)