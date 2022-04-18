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
  imageSrc:'assets/samuraiMack/Idle.png',
  frameNum: 8,
  scale: 2.5,
  offset: {
    x: 215,
    y: 108
  },
  sprites : {
    idle: {
      imageSrc:'assets/samuraiMack/Idle.png',
      frameNum: 8
    },
    run: {
      imageSrc:'assets/samuraiMack/Run.png',
      frameNum: 8
    },
    jump: {
      imageSrc:'assets/samuraiMack/Jump.png',
      frameNum: 2
    },
    fall: {
      imageSrc:'assets/samuraiMack/Fall.png',
      frameNum: 2
    },
    attack1: {
      imageSrc:'assets/samuraiMack/Attack1.png',
      frameNum: 6
    },
    takeHit: {
      imageSrc:'assets/samuraiMack/Take Hit.png',
      frameNum: 4
    }
  },
  attackBox: {
    offset: {
      x:100,
      y:50
    },
    width: 140,
    height: 50
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
  color:'blue',
  imageSrc:'assets/kenji/Idle.png',
  frameNum: 4,
  scale: 2.5,
  offset: {
    x: 215,
    y: 120
  },
  sprites : {
    idle: {
      imageSrc:'assets/kenji/Idle.png',
      frameNum: 4
    },
    run: {
      imageSrc:'assets/kenji/Run.png',
      frameNum: 8
    },
    jump: {
      imageSrc:'assets/kenji/Jump.png',
      frameNum: 2
    },
    fall: {
      imageSrc:'assets/kenji/Fall.png',
      frameNum: 2
    },
    attack1: {
      imageSrc:'assets/kenji/Attack1.png',
      frameNum: 4
    },
    takeHit: {
      imageSrc:'assets/kenji/Take hit.png',
      frameNum: 3
    }
  },
  attackBox: {
    offset: {
      x:-165,
      y:50
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
    player.switchSprite('run');
  }
  else if(keys.d.pressed && player.lastKey === 'd') {
    player.velocity.x = 5;
    player.switchSprite('run');
  }
  else {
    player.switchSprite('idle');
  }

  if(player.velocity.y < 0) {
    player.switchSprite('jump');
  }
  else if (player.velocity.y > 0){
    player.switchSprite('fall');
  }

  //enemy movement
  enemy.velocity.x = 0;
  if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft') {
    enemy.velocity.x = -5;
    enemy.switchSprite('run');
  }
  else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight') {
    enemy.velocity.x = 5;
    enemy.switchSprite('run');
  }
  else {
    enemy.switchSprite('idle');
  }

  if(enemy.velocity.y < 0) {
    enemy.switchSprite('jump');
  }
  else if (enemy.velocity.y > 0){
    enemy.switchSprite('fall');
  }

  //collision detection, refactored to use rectangularCollision as a way to store the long if statement
  if(rectangularCollision({
    rectangle1: player,
    rectangle2: enemy
  }) && player.isAttacking && player.currFrame === 4){
    enemy.takeHit()
    player.isAttacking = false;
    document.querySelector('#enemyHealth').style.width = enemy.health + '%';
  }
  if(player.isAttacking && player.currFrame === 4){
    player.isAttacking = false;
  }

  if(rectangularCollision({
    rectangle1: enemy,
    rectangle2: player
  })&& enemy.isAttacking && enemy.currFrame === 2){
    enemy.isAttacking = false;
    player.health -= 20;
    document.querySelector('#playerHealth').style.width = player.health + '%';
  }
  if(enemy.isAttacking && enemy.currFrame === 2){
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
