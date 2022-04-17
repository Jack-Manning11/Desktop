class Sprite {
  constructor({position, imageSrc, scale = 1, frameNum = 1, offset = {x:0,y:0}}){
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
    this.frameNum = frameNum;
    this.currFrame = 0;
    this.framesElapsed = 0;
    //speed of the animation
    this.framesHold = 5;
    this.offset = offset;
  }
  draw(){
    c.drawImage(
      this.image,
      this.currFrame * (this.image.width / this.frameNum),
      0,
      this.image.width / this.frameNum,
      this.image.height,
      this.position.x - this.offset.x,
      this.position.y - this.offset.y,
      (this.image.width / this.frameNum) * this.scale,
      this.image.height * this.scale);
  }

  animateFrame() {
    this.framesElapsed++;
    if(this.framesElapsed % this.framesHold === 0) {
      if(this.currFrame < this.frameNum - 1) {
        this.currFrame++;
      }
      else {
        this.currFrame = 0;
      }
    }
  }

  update(){
    this.draw();
    this.animateFrame();
  }
}

//OOP for sprites including player and enemy
class Fighter extends Sprite{
  //Constructing the sprite, the brackets below wrapping my arguments are there to pass them through as an object,
  //preventing all arguments from being required, and letting me pass through only what I need
  constructor({position, velocity,color = 'red', imageSrc, scale = 1, frameNum = 1, offset = {x:0,y:0}, sprites}){
    //calls parent constructor (Sprite) and sets these values
    super({
      position,
      imageSrc,
      scale,
      frameNum,
      offset
    });
    this.currFrame = 0;
    this.framesElapsed = 0;
    this.framesHold = 5;

    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.doubleJump = 0;
    this.health = 100;
    this.sprites = sprites;

    this.attackBox = {
      //needs to be made an object to handle facing different directions
      position: {
        x:this.position.x,
        y:this.position.y
      },
      offset,
      width: 100,
      height: 50
    }
    for(const sprite in this.sprites) {
      sprites[sprite].image = new Image();
      sprites[sprite].image.src = sprites[sprite].imageSrc;
    }
    this.color = color;
    this.isAttacking;
  }

  update(){
    this.draw();
    this.animateFrame();
    //reupdate position in order to continue the attackBox tracking
    this.attackBox.position.x = this.position.x + this.attackBox.offset.x;
    this.attackBox.position.y = this.position.y;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    if(this.position.y + this.height + this.velocity.y >= canvas.height - 96) {
      this.velocity.y = 0;
      this.doubleJump = 0;
    }
    else {
      this.velocity.y += gravity;
    }
  }

  attack(){
    this.isAttacking = true;
    setTimeout(() => {
      this.isAttacking = false;
    },100)}
    switchSprite(sprite) {
      switch (sprite) {
        case 'idle':
        if(this.image !== this.sprites.idle.image){
          this.image = this.sprites.idle.image;
          this.framesNum = this.sprites.idle.frameNum;
          this.currFrame = 0;
        }
        break;
        case 'run':
        if(this.image !== this.sprites.run.image){
          this.image = this.sprites.run.image;
          this.framesNum = this.sprites.run.frameNum;
          this.currFrame = 0;
        }
        break;
        case 'jump':
        if(this.image !== this.sprites.jump.image){
          this.image = this.sprites.jump.image;
          this.framesNum = this.sprites.jump.frameNum;
          this.currFrame = 0;
        }
        break;
      }
    }
}
