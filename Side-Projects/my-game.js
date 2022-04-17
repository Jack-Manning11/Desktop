//Grab the canvas made in html and the context of the canvas to begin creating the game
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

//set the width and height to something that will fit on most screens
canvas.width = 1024;
canvas.height = 576;

const gravity = 0.7;

c.fillRect(0,0,canvas.width,canvas.height);

const background = new Sprite({
  position: {
    x:0,
    y:0
  },
  imageSrc:'./assets/forest-background.png'
});



//player creation
const player = new Fighter({
  position:{
    x:0,
    y:0
  },
  velocity: {
    x:0,
    y:0
  },
  offset: {
    x:0,
    y:0
  },
  imageSrc:'assets/samuraiJack/Idle.png',
  frameNum: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 157
  },
  sprites : {
    idle: {
      imageSrc:'assets/samuraiJack/_Idle.png',
      frameNum: 8
    },
    run: {
      imageSrc:'assets/samuraiJack/Run.png',
      frameNum: 8
    },
    jump: {
      imageSrc:'assets/samuraiJack/Jump.png',
      frameNum: 2
    }
  }
});

//enemy creation
const enemy = new Fighter({
  position:{
    x:400,
    y:100
  },
  velocity: {
    x:0,
    y:0
  },
  offset: {
    x: -50,
    y: 0
  },
  color:'blue'
});

const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  }
}
decreaseTimer();

function animate(){
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0,0,canvas.width,canvas.height);
  background.update();

  player.update();
  //enemy.update();

  //player movement
  player.velocity.x = 0;
  if(keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5;
    player.switchSprite('run');
  }
  else if(keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5;
    player.switchSprite('run');
  }
  else {
    player.switchSprite('idle');
  }

  if (player.velocity.y < 0) {
    player.switchSprite('jump');
  }

  //enemy movement
  enemy.velocity.x = 0;
  if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5;
  }
  else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5;
  }

  //collision detection, refactored to use rectangularCollision as a way to store the long if statement
  if(rectangularCollision({
    rectangle1: player,
    rectangle2: enemy
  })&& player.isAttacking){
    player.isAttacking = false;
    enemy.health -= 20;
    document.querySelector('#enemyHealth').style.width = enemy.health + '%';
  }
  if(rectangularCollision({
    rectangle1: enemy,
    rectangle2: player
  })&& enemy.isAttacking){
    enemy.isAttacking = false;
    player.health -= 20;
    document.querySelector('#playerHealth').style.width = player.health + '%';
  }

  //end game based on health
  if(enemy.health <= 0 || player.health <=0){
    determineWinner({player, enemy, timerId});
  }
}

animate();

window.addEventListener('keydown',(event) => {
  switch(event.key){
    case 'd':
    keys.d.pressed = true;
    player.lastKey = 'd';
    break;
    case 'a':
    keys.a.pressed = true;
    player.lastKey = 'a';
    break;
    case 'w':
    if(player.doubleJump < 2){
      player.velocity.y = -20;
      player.doubleJump++;
    }
    break;
    case ' ':
    player.attack();
    break;
    case 'ArrowRight':
    keys.ArrowRight.pressed = true;
    enemy.lastKey = 'ArrowRight';
    break;
    case 'ArrowLeft':
    keys.ArrowLeft.pressed = true;
    enemy.lastKey = 'ArrowLeft';
    break;
    case 'ArrowUp':
    if(enemy.doubleJump < 2){
      enemy.velocity.y = -20;
      enemy.doubleJump++;
    }
    break;
    case 'ArrowDown':
    enemy.attack();
    break;
  }
})

window.addEventListener('keyup',(event) => {
  switch(event.key){
    case 'd':
    keys.d.pressed = false;
    break;
    case 'a':
    keys.a.pressed = false;
    break;
  }

  switch(event.key){
    case 'ArrowRight':
    keys.ArrowRight.pressed = false;
    break;
    case 'ArrowLeft':
    keys.ArrowLeft.pressed = false;
    break;
  }
})
