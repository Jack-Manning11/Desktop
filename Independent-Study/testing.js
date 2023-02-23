let data = [];
let activePlayers = [];
const form = document.querySelector('form');
const make = document.querySelector('#make')
const miss = document.querySelector('#miss');
const pass = document.querySelector('#pass');
let topSection = document.querySelector('.first');
let botSection = document.querySelector('.second');

class Player {
    constructor(fname, lname, school, startheight){
        this.fname = fname;
        this.lname = lname;
        this.school = school;
        this.startheight = startheight;
        this.attemptNum = 0;
        this.bestHeight = 0;
        this.active = true;
        this.heights = [];
        this.currHeight = [];
    }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  temp = [];
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    temp.push(pair[1]);
  }
  form.reset();
  let player = new Player(temp[0],temp[1],temp[2],temp[3]);
  data.push(player);
});

make.addEventListener('click', ()=>{
  
});

miss.addEventListener('click', ()=>{

});

pass.addEventListener('click', ()=>{

});