const canvas = document.querySelector("#canvas");
const clear = document.querySelector("#clear");
const rainbow = document.querySelector("#rainbow");
const ctx = canvas.getContext("2d");
let coord = { x: 0, y: 0 };

let crazyRainbowOn = false;



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
  
  if( !crazyRainbowOn )
  {
	  var red = Math.random() * 255;
	  var green = Math.random() * 255;
	  var blue = Math.random() * 255;
	  ctx.strokeStyle = 'rgb('+
		  red+','+
		  green+','+
		  blue+')';
  }
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
  ctx.lineCap = "round";
  
  if( crazyRainbowOn )
  {
	  var red = Math.random() * 255;
	  var green = Math.random() * 255;
	  var blue = Math.random() * 255;
	  ctx.strokeStyle = 'rgb('+
		  red+','+
		  green+','+
		  blue+')';
  }
  ctx.moveTo(coord.x, coord.y);
  reposition(event);
  ctx.lineTo(coord.x, coord.y);
  ctx.stroke();
}

clear.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

rainbow.addEventListener('click', () => {
  crazyRainbowOn = !crazyRainbowOn;
  if (crazyRainbowOn) {
    rainbow.textContent = 'Crazy Rainbow!';
  } else {
    rainbow.textContent = 'Crazy Rainbow?';
  }
});