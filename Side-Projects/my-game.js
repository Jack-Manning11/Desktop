//Grab the canvas made in html and the context of the canvas to begin creating the game
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//set the width and height to something that will fit on most screens
canvas.width = 1024;
canvas.height = 576;

const gravity = 0.2;

c.fillRect(0,0,canvas.width,canvas.height);

//OOP for sprites including player and enemy
class Sprite {
  //Constructing the sprite, the brackets below wrapping my arguments are there to pass them through as an object,
  //preventing all arguments from being required, and letting me pass through only what I need
  constructor({position, velocity}){
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }
  draw(){
    c.fillStyle = 'red';
    c.fillRect(this.position.x,this.position.y,50,this.height);
  }
  update(){
    this.draw();
    this.position.y += this.velocity.y;

    if(this.position.y + this.height + this.velocity.y >= canvas.height) {
      this.velocity.y = 0;
    }
    else {
      this.velocity.y += gravity;
    }
  }
}

//player creation
const player = new Sprite({
  position:{
    x:0,
    y:0
  },
  velocity: {
    x:0,
    y:0
  }
});

//enemy creation
const enemy = new Sprite({
  position:{
    x:400,
    y:100
  },
  velocity: {
    x:0,
    y:0
  }
});

function animate(){
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0,0,canvas.width,canvas.height);
  player.update();
  enemy.update();
}

animate();
