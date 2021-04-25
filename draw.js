const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", stop);
window.addEventListener("resize", resize);

function resize() {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
}

resize();

function start(event) {
  document.addEventListener("mousemove", draw);
  reposition(event);
}

function reposition(event) {
  coord.x = (event.pageX + canvas.offsetLeft);
  coord.y = (event.pageY + canvas.offsetTop);
}

function stop() {
  document.removeEventListener("mousemove", draw);
}

function draw(event) {
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.lineCap = "round";m
  ctx.strokeStyle = "#ACD3ED";
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}