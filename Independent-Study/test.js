const nameHolder = document.querySelector('#playerName');
const attemptHolder = document.querySelector('#attemps');
const pos2 = document.querySelector('#two');
const pos3 = document.querySelector('#three');
const pos4 = document.querySelector('#four');
const pos5 = document.querySelector('#five');
const pos6 = document.querySelector('#six');
const pos7 = document.querySelector('#seven');
const pos8 = document.querySelector('#eight');
const pos9 = document.querySelector('#nine');

const yes = document.querySelector('#y')
const no = document.querySelector('#n');

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    console.log(pair)
  }
})

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
  }
]

yes.addEventListener('click', ()=>{
  if(players.length > 10){
    players.splice(0, 1);
    nameHolder.textContent = players[0].name;
    attemptHolder.textContent = players[0].attemps;
    pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
    pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
    pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
    pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
    pos6.textContent = "Next Up: " + players[5].name;
  } else {
    players.splice(0, 1);
    nameHolder.textContent = players[0].name;
    attemptHolder.textContent = players[0].attemps;
    switch(players.length){
      case 9:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
        pos8.textContent = "Name: " + players[7].name + " " + players[7].attemps;
        pos9.textContent = "Name: " + players[8].name + " " + players[8].attemps;
        break;
      case 8:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
        pos8.textContent = "Name: " + players[7].name + " " + players[7].attemps;
        pos9.textContent = "";
        break;
      case 7:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 6:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 5:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 4:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 3:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 2:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "";
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 1:
        pos2.textContent = "";
        pos3.textContent = "";
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
      break;
      case 0:
        nameHolder.textContent = "Players are all finished!";
        break;
      default:
        alert("error");
    }
  }
});

no.addEventListener('click', ()=>{
  if(players.length > 10){
    if(players[0].attemps == 1){
      players.splice(0,1);
    } else {
      players[0].attemps = players[0].attemps-1;
      let temp = players[0];
      for(let i = 0; i < 4; i++){
        players[i] = players[i+1];
      }
      players[4] = temp;
    }
    nameHolder.textContent = players[0].name;
    attemptHolder.textContent = players[0].attemps;
    pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
    pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
    pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
    pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
    pos6.textContent = "Next Up: " + players[5].name;
  } else {
    if(players[0].attemps == 1){
      players.splice(0,1);
    } else {
      players[0].attemps = players[0].attemps-1;
      let temp = players[0];
      for(let i = 0; i < players.length; i++){
        players[i] = players[i+1];
      }
      players[players.length-1] = temp;
    }
    if(players.length != 0){
      nameHolder.textContent = players[0].name;
      attemptHolder.textContent = players[0].attemps;
    }
    switch(players.length){
      case 9:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
        pos8.textContent = "Name: " + players[7].name + " " + players[7].attemps;
        pos9.textContent = "Name: " + players[8].name + " " + players[8].attemps;
        break;
      case 8:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
        pos8.textContent = "Name: " + players[7].name + " " + players[7].attemps;
        pos9.textContent = "";
        break;
      case 7:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 6:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 5:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 4:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 3:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 2:
        pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
        pos3.textContent = "";
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 1:
        pos2.textContent = "";
        pos3.textContent = "";
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
      break;
      case 0:
        nameHolder.textContent = "Players are all finished!";
        break;
      default:
        alert("error");
    }
  }
});

if(players.length < 10){
  nameHolder.textContent = players[0].name;
  attemptHolder.textContent = players[0].attemps;
  pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
  pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
  pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
  pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
  pos6.textContent = "Name: " + players[5].name + " " + players[5].attemps;
  pos7.textContent = "Name: " + players[6].name + " " + players[6].attemps;
  pos8.textContent = "Name: " + players[7].name + " " + players[7].attemps;
  pos9.textContent = "Name: " + players[8].name + " " + players[8].attemps;
} else {
  nameHolder.textContent = players[0].name;
  attemptHolder.textContent = players[0].attemps;
  pos2.textContent = "Name: " + players[1].name + " " + players[1].attemps;
  pos3.textContent = "Name: " + players[2].name + " " + players[2].attemps;
  pos4.textContent = "Name: " + players[3].name + " " + players[3].attemps;
  pos5.textContent = "Name: " + players[4].name + " " + players[4].attemps;
  pos6.textContent = "Next Up: " + players[5].name;
}