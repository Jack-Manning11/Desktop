//create the HTML canvas inside Javascript to prevent anything from loading improperly
var score = 0;
var gscore = 0;
var ghost = false;
var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");
var keyClick = {};

document.addEventListener("keydown", function (event) {
  keyClick[event.keyCode]=true;
  move(keyClick);
}, false);
document.addEventListener("keyup", function (event) {
  delete keyClick[event.keyCode];
}, false);

canvas.height = 500;
canvas.width = 500;
document.body.appendChild(canvas);

characterImage = new Image();
characterImage.ready = false;
characterImage.onload = checkReady;
characterImage.src = "../img/pac.png";

var player = {
  x: 50,
  y: 100,
  form: 320,
  dir: 0,
  size: 32,
  speed: 10
}

var enemy = {
  x: 150,
  y: 200,
  speed: 3,
  ghostNum:0,
  moving:0,
  dirX:0,
  dirY:0
}
var powerUp = {
  x: 10,
  y: 10,
  powered: false,
  pCountDown: 0,
  ghostNum:0
}

function checkReady() {
  this.ready = true;
  playGame();
}

function playGame() {
  render();
  requestAnimationFrame(playGame);
}

function rndmNum(n) {
  return Math.floor(Math.random()*n);
}

function move(keyClick) {
  //left
  if(37 in keyClick){
    player.x-=player.speed;
    player.dir = 64;
  }
  //up
  if(38 in keyClick){
    player.y-=player.speed;
    player.dir = 96;
  }
  //right
  if(39 in keyClick){
    player.x+=player.speed;
    player.dir = 0;
  }
  //down
  if(40 in keyClick){
    player.y+=player.speed;
    player.dir = 32;
  }

  //This is handling the looping functionality, moving from one end of the screen down to the other
  if(player.x >= (canvas.width-32)){
    player.x=0;
  }
  if(player.y >= (canvas.height-32)){
    player.y=0;
  }
  if(player.x < 0){
    player.x=canvas.width-32;
  }
  if(player.y < 0){
    player.y=canvas.height-32;
  }

  if(player.form == 320){
    //this is the location with the open mouths
    player.form = 352;
  }
  else {
    //resetting back to the closed mouth character, creating the eating animation
    player.form = 320;
  }
  render();
}

function render() {
  context.fillStyle = "#141512";
  context.fillRect(0,0,canvas.width,canvas.height);

  if(!powerUp.powered) {
    powerUp.x = rndmNum(420) + 30;
    powerUp.y = rndmNum(250);
    powerUp.powered = true;
  }

  if(!ghost) {
    //this randomizes the ghost pulled from character image
    enemy.ghostNum = rndmNum(5) * 64;
    enemy.x = rndmNum(580);
    enemy.y = rndmNum(380);
    ghost = true;
  }
  if(enemy.moving < 0){
    enemy.moving = (rndmNum(30)*3)+10+rndmNum(1);
    enemy.dirX = 0;
    enemy.dirY = 0;
    if(enemy.moving % 2){
      if(player.x < enemy.x) {
        enemy.dirX = -enemy.speed;
      }
      else {
        enemy.dirX = enemy.speed;
      }
    }
    else {
      if(player.y < enemy.y){
        enemy.dirY = -enemy.speed;
      }
      else {
        enemy.dirY = enemy.speed;
      }
    }
  }
  enemy.moving--;
  enemy.x = enemy.x + enemy.dirX;
  enemy.y = enemy.y + enemy.dirY;

  if(enemy.x >= (canvas.width-32)){
    enemy.x=0;
  }
  if(enemy.y >= (canvas.height-32)){
    enemy.y=0;
  }
  if(enemy.x < 0){
    enemy.x=canvas.width-32;
  }
  if(enemy.y < 0){
    enemy.y=canvas.height-32;
  }

  //Collision detection
  if(player.x <= powerUp.x && powerUp.x <= (player.x+32) && player.y <= powerUp.y && powerUp.y <= (player.y+32)){
    powerUp.powered = false;
    powerUp.pCountDown = 500;
    powerUp.ghostNum = enemy.ghostNum;
    enemy.ghostNum = 384;
    powerUp.x = 0;
    powerUp.y = 0;
  }


  if(powerUp.powered) {
    context.fillStyle = "red";
    context.beginPath();
    context.arc(powerUp.x, powerUp.y, 5, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  }

  context.font = "20px Verdana";
  context.fillStyle = "#F1F9E6";
  context.fillText("Pacman: " + score + " vs Ghost: " + gscore,2,18);
  //all the parameters are as followed...
  // (X and Y Coords on the source image for top left corner, width and height of segment to be extracted)
  // (X and Y placement for chunk being sliced out, width and height of final slice)
  context.drawImage(characterImage,enemy.ghostNum,0,32,32,enemy.x,enemy.y,32,32);
  context.drawImage(characterImage,player.form,player.dir,32,32,player.x,player.y,player.size,player.size);
}
