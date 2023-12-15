const buttons = document.querySelectorAll('button');
const width = window.innerWidth || document.documentElement.clientWidth;
const height = window.innerHeight || document.documentElement.clientHeight;
const body = document.querySelector('body');

let str = "";

function animate(){
  buttons.forEach(button => {
    let x = parseInt(button.getAttribute('xpos'));
    let y = parseInt(button.getAttribute('ypos'));
    let xVel = parseInt(button.getAttribute('xvel'));
    let yVel = parseInt(button.getAttribute('yvel'));
    if(x > width || x < 0){
      xVel = -xVel;
      button.setAttribute("xvel", xVel);
    } 
    if(y > height || y < 0){
      yVel = -yVel;
      button.setAttribute("yvel", yVel);
    }
    x += xVel;
    y += yVel;
    button.style.left = x + 'px';
    button.style.top = y + 'px';
    button.setAttribute("xpos", x);
    button.setAttribute("ypos", y);
  });
  requestAnimationFrame(animate);
}
animate();

body.addEventListener('click', (e) => {
  //console.log(e.target.id);
  if(e.target.id !== 'container'){
    str += e.target.id;
  } 
  if(e.target.id == 'clear'){
    str = "";
    p.textContent = str;
  }
  //check if they clicked "clear"
  //submit
  //length check
});