var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1/16/1000;
var backCanvas = document.Create('canvas');
var backCtx = backCanvas.getContext('2d');

var x = 0;
var y = 0;

//var image = new Image();
//image.src = "file://‪/Users/cvossman/Downloads/download.jpg"

var input = {
  up: false,
  down: false,
  left: false,
  right: false,
}

window.onkeydown = function(event) {
  console.log(event);
  console.log(event.keyCode);
  switch(event.keyCode) {
    // UP
    case 38:
    case 87:
      input.up = true;
      break;
    // LEFT
    case 37:
    case 65:
      input.left = true;
      break;
    // RIGHT
    case 39:
    case 68:
      input.right = true;
      break;
    // DOWN
    case 40:
    case 83:
      input.down = true;
      break;
  }
}

window.onkeyup = function(event) {
  console.log(event);
  console.log(event.keyCode);
  switch(event.keyCode) {
    // UP
    case 38:
    case 87:
      input.up = false;
      break;
    // LEFT
    case 37:
    case 65:
      input.left = false;
      break;
    // RIGHT
    case 39:
    case 68:
      input.right = false;
      break;
    // DOWN
    case 40:
    case 83:
      input.down = false;
      break;
  }
}

function loop(timestamp) {
  if(input.up) y -= 1;
  if(input.down) y += 1;
  if(input.left) x -= 1;
  if(input.right) x += 1;
  
  backCtx.clearRect(0, 0, canvas.width, canvas.height);
  //backCtx.drawImage(image, 0, 0);
  
  
  for (i = 0; i < 1000; i++){
	  backCtx.fillStyle = "blue";
	  backCtx.fillRect((i*20 % 100), (i*20 % 100), 10, 10);
  }
  
  
  backCtx.fillStyle = "red";
  backCtx.fillRect(x, y, 5, 5);
  //setTimeout(loop, speed);
  requestAnimationFrame(loop);
}

//var intervalId = setInterval(loop, speed);

requestAnimationFrame(loop);
//loop();
