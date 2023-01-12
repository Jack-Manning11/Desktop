const nameHolder = document.querySelector('#playerName');
const attemptHolder = document.querySelector('#attemps');
const pos2 = document.querySelector('#two');
const pos3 = document.querySelector('#three');
const pos4 = document.querySelector('#four');
const pos5 = document.querySelector('#five');
const yes = document.querySelector('#y')
const no = document.querySelector('#n');
const next = document.querySelector('#nextUp');
let nextUp = 5;
let currRotation = [0,1,2,3,4];

let players = [
  {
    name: "Alice",
    attemps: 3
  },
  {
    name: "Ben",
    attemps: 3
  },
  {
    name: "Charlie",
    attemps: 3
  },
  {
    name: "Dan",
    attemps: 3
  },
  {
    name: "Eli",
    attemps: 3
  },
  {
    name: "Frank",
    attemps: 3
  },
  {
    name: "Gary",
    attemps: 3
  },
  {
    name: "Hank",
    attemps: 3
  },
  {
    name: "Isaac",
    attemps: 3
  },
  {
    name: "Jack",
    attemps: 3
  },
  {
    name: "Kaladin",
    attemps: 3
  },
  {
    name: "Lauren",
    attemps: 3
  },
  {
    name: "Manny",
    attemps: 3
  },
  {
    name: "Ned",
    attemps: 3
  },
  {
    name: "Oscar",
    attemps: 3
  },
  {
    name: "Paul",
    attemps: 3
  }
]

yes.addEventListener('click', ()=>{
  if(players.length >= 10){
    let temp = currRotation;
    for(let i = 0; i < 4; i++){
      currRotation[i] = temp[i+1];
    }
    currRotation[4] = nextUp;
    nextUp++;
  }
  
  nameHolder.textContent = players[currRotation[0]].name;
  attemptHolder.textContent = players[currRotation[0]].attemps;
  pos2.textContent = "Name: " + players[currRotation[1]].name + "____Attemps:" + players[currRotation[1]].attemps;
  pos3.textContent = "Name: " + players[currRotation[2]].name + "____Attemps:" + players[currRotation[2]].attemps;
  pos4.textContent = "Name: " + players[currRotation[3]].name + "____Attemps:" + players[currRotation[3]].attemps;
  pos5.textContent = "Name: " + players[currRotation[4]].name + "____Attemps:" + players[currRotation[4]].attemps;
  next.textContent = "Next up... " + players[nextUp].name;
});

no.addEventListener('click', ()=>{
  if(players.length >= 10){
    players[currRotation[0]].attemps = players[currRotation[0]].attemps - 1;
    if(players[currRotation[0]].attemps == 0){
      players.splice(currRotation[0], 1);
      console.log(players);
      let temp = currRotation;
      for(let i = 0; i < 4; i++){
        currRotation[i] = temp[i+1];
      }
      currRotation[4] = nextUp;
      nextUp++;
    } else {
      let temp = currRotation;
      let reRun = currRotation[0];
      for(let i = 0; i < 4; i++){
        currRotation[i] = temp[i+1];
      }
      currRotation[4] = reRun;
    }
  } else {
    alert("Five Alive is dead");
  }
  
  nameHolder.textContent = players[currRotation[0]].name;
  attemptHolder.textContent = players[currRotation[0]].attemps;
  pos2.textContent = "Name: " + players[currRotation[1]].name + "____Attemps:" + players[currRotation[1]].attemps;
  pos3.textContent = "Name: " + players[currRotation[2]].name + "____Attemps:" + players[currRotation[2]].attemps;
  pos4.textContent = "Name: " + players[currRotation[3]].name + "____Attemps:" + players[currRotation[3]].attemps;
  pos5.textContent = "Name: " + players[currRotation[4]].name + "____Attemps:" + players[currRotation[4]].attemps;
  next.textContent = "Next up... " + players[nextUp].name;
});

nameHolder.textContent = players[currRotation[0]].name;
attemptHolder.textContent = players[currRotation[0]].attemps;
pos2.textContent = "Name: " + players[currRotation[1]].name + "____Attemps:" + players[currRotation[1]].attemps;
pos3.textContent = "Name: " + players[currRotation[2]].name + "____Attemps:" + players[currRotation[2]].attemps;
pos4.textContent = "Name: " + players[currRotation[3]].name + "____Attemps:" + players[currRotation[3]].attemps;
pos5.textContent = "Name: " + players[currRotation[4]].name + "____Attemps:" + players[currRotation[4]].attemps;
next.textContent = "Next up... " + players[nextUp].name;
