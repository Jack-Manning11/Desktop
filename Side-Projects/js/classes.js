class Sprite {
  constructor({position, imageSrc, scale = 1}){
    this.position = position;
    this.width = 50;
    this.height = 150;
    this.image = new Image();
    this.image.src = imageSrc;
    this.scale = scale;
  }
  draw(){
    c.drawImage(
      this.image,
      0,
      0,
      this.image.width / 6, //full width of the image divided by the number of frames
      this.image.height,
      this.position.x,
      this.position.y,
      (this.image.width / 6) * this.scale,
      this.image.height * this.scale);
  }
  update(){
    this.draw();
  }
}

//OOP for sprites including player and enemy
class Fighter {
  //Constructing the sprite, the brackets below wrapping my arguments are there to pass them through as an object,
  //preventing all arguments from being required, and letting me pass through only what I need
  constructor({position, velocity,color = 'red', offset}){
    this.position = position;
    this.velocity = velocity;
    this.width = 50;
    this.height = 150;
    this.lastKey;
    this.doubleJump = 0;
    this.health = 100;
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
    this.color = color;
    this.isAttacking;
  }
  draw(){
    c.fillStyle = this.color;
    c.fillRect(this.position.x,this.position.y,this.width,this.height);

    //attackBox draw
    if(this.isAttacking){
      c.fillStyle = 'green';
      c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height);
    }
  }
  update(){
    this.draw();
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
    },100)
  }
}
