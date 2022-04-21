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
    x:200,
    y:50
  },
  velocity: {
    x:0,
    y:0
  },
  offset: {
    x:0,
    y:0
  },
  imageSrc:'./assets/knight/Idle.png',
  frameNum: 10,
  scale: 3,
  offset: {
    x: 150,
    y: 40
  },
  sprites : {
    idle: {
      imageSrc:'./assets/knight/Idle.png',
      frameNum: 10
    },
    idleLeft: {
      imageSrc:'./assets/knight/NewIdleLeft.png',
      frameNum: 10
    },
    run: {
      imageSrc:'./assets/knight/Run.png',
      frameNum: 10
    },
    runLeft: {
      imageSrc:'./assets/knight/RunLeft.png',
      frameNum: 10
    },
    jump: {
      imageSrc:'./assets/knight/Jump.png',
      frameNum: 3
    },
    jumpLeft: {
      imageSrc:'./assets/knight/JumpLeft.png',
      frameNum: 3
    },
    fall: {
      imageSrc:'./assets/knight/Fall.png',
      frameNum: 3
    },
    fallLeft: {
      imageSrc:'./assets/knight/FallLeft.png',
      frameNum: 3
    },
    attack1: {
      imageSrc:'./assets/knight/Attack.png',
      frameNum: 4
    },
    attack1Left: {
      imageSrc:'./assets/knight/AttackLeft.png',
      frameNum: 4
    },
    takeHit: {
      imageSrc:'./assets/knight/RealHit.png',
      frameNum: 3
    }
  },
  attackBox: {
    offset: {
      x:-150,
      y:-100
    },
    width: 180,
    height: 50
  }
});

//enemy creation
const enemy = new Fighter({
  position:{
    x:800,
    y:50
  },
  velocity: {
    x:0,
    y:0
  },
  offset: {
    x: -50,
    y: 0
  },
  color:'blue',
  imageSrc:'assets/Huntress/Sprites/IdleLeft.png',
  frameNum: 8,
  scale: 3,
  offset: {
    x: 215,
    y: 100
  },
  sprites : {
    idle: {
      imageSrc:'assets/Huntress/Sprites/Idle.png',
      frameNum: 8
    },
    idleLeft: {
      imageSrc:'assets/Huntress/Sprites/IdleLeft.png',
      frameNum: 8
    },
    run: {
      imageSrc:'assets/Huntress/Sprites/Run.png',
      frameNum: 8
    },
    runLeft: {
      imageSrc:'assets/Huntress/Sprites/RunLeft.png',
      frameNum: 8
    },
    jump: {
      imageSrc:'assets/Huntress/Sprites/Jump.png',
      frameNum: 2
    },
    jumpLeft: {
      imageSrc:'assets/Huntress/Sprites/JumpLeft.png',
      frameNum: 2
    },
    fall: {
      imageSrc:'assets/Huntress/Sprites/Fall.png',
      frameNum: 2
    },
    fallLeft: {
      imageSrc:'assets/Huntress/Sprites/FallLeft.png',
      frameNum: 2
    },
    attack1: {
      imageSrc:'assets/Huntress/Sprites/Attack2.png',
      frameNum: 5
    },
    attack1Left: {
      imageSrc:'assets/Huntress/Sprites/AttackLeft2.png',
      frameNum: 5
    },
    takeHit: {
      imageSrc:'assets/Huntress/Sprites/Take hit.png',
      frameNum: 3
    }
  },
  attackBox: {
    offset: {
      x:-140,
      y:-100
    },
    width: 150,
    height: 50
  }
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
};
decreaseTimer();

function animate(){
  window.requestAnimationFrame(animate);
  c.fillStyle = 'black';
  c.fillRect(0,0,canvas.width,canvas.height);
  background.update();

  player.update();
  enemy.update();

  //player movement
  player.velocity.x = 0;
  if(keys.a.pressed && player.lastKey === 'a') {
    player.velocity.x = -5;
    player.switchSprite('runLeft');
  }
  else if(keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5;
    player.switchSprite('run');
  }
  else if(player.lastKey === 'a' && player.velocity.y === 0){
    player.switchSprite('idleLeft');
  }
  else if(player.velocity.y === 0){
    player.switchSprite('idle');
  }

  if(player.velocity.y < 0 && player.lastKey === 'a') {
    player.switchSprite('jumpLeft');
  }
  else if(player.velocity.y < 0 && player.lastKey === 'd') {
    player.switchSprite('jump');
  }
  else if (player.velocity.y > 0 && player.lastKey === 'a'){
    player.switchSprite('fallLeft');
  }
  else if (player.velocity.y > 0 && player.lastKey === 'd'){
    player.switchSprite('fall');
  }

  //enemy movement
  enemy.velocity.x = 0;
  if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5;
    enemy.switchSprite('runLeft');
  }
  else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5;
    enemy.switchSprite('run');
  }
  else if(enemy.lastKey === 'ArrowLeft' && enemy.velocity.y === 0){
    enemy.switchSprite('idleLeft');
  }
  else if(enemy.lastKey === 'ArrowRight' && enemy.velocity.y === 0){
    enemy.switchSprite('idle');
  }
  else if(enemy.velocity.y === 0){
    enemy.switchSprite('idleLeft');
  }

  if(enemy.velocity.y < 0 && enemy.lastKey === 'ArrowLeft') {
    enemy.switchSprite('jumpLeft');
  }
  else if(enemy.velocity.y < 0 && enemy.lastKey === 'ArrowRight') {
    enemy.switchSprite('jump');
  }
  else if (enemy.velocity.y > 0 && enemy.lastKey === 'ArrowLeft'){
    enemy.switchSprite('fallLeft');
  }
  else if (enemy.velocity.y > 0 && enemy.lastKey === 'ArrowRight'){
    enemy.switchSprite('fall');
  }

  //collision detection, refactored to use rectangularCollision as a way to store the long if statement
  if(rectangularCollision({
    rectangle1: player,
    rectangle2: enemy
  }) && player.isAttacking && player.currFrame === 2){
    enemy.takeHit();
    player.isAttacking = false;
    document.querySelector('#enemyHealth').style.width = enemy.health + '%';
  }
  if(player.isAttacking && player.currFrame === 2){
    player.isAttacking = false;
  }

  if(rectangularCollision({
    rectangle1: enemy,
    rectangle2: player
  })&& enemy.isAttacking && enemy.currFrame === 3){
    player.takeHit();
    enemy.isAttacking = false;
    document.querySelector('#playerHealth').style.width = player.health + '%';
  }
  if(enemy.isAttacking && enemy.currFrame === 3){
    enemy.isAttacking = false;
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
});

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
});
