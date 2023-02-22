const form = document.querySelector('form');
let data = [];

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

