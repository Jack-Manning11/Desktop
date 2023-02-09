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

let topSection = document.querySelector('.first');
let botSection = document.querySelector('.second');

const pList = document.querySelector('.activePlayers');

const yes = document.querySelector('#y')
const no = document.querySelector('#n');

let players = [];

const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault();
  temp = [];
  const formData = new FormData(form);
  for (const pair of formData.entries()) {
    temp.push(pair);
  }
  arrayBuilder(temp)
  form.reset();
  show();
});

function arrayBuilder(formArray){
  player = {
    firstName: formArray[0][1],
    lastName: formArray[1][1],
    school: formArray[2][1],
    attemptNumber: 1
  }
  players.push(player);
}

yes.addEventListener('click', ()=>{
  if(players.length > 10){
    players.splice(0, 1);
    nameHolder.textContent = players[0].firstName;
    attemptHolder.textContent = players[0].attemptNumber;
    pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
    pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
    pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
    pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
    pos6.textContent = "Next Up: " + players[5].firstName;
  } else {
    players.splice(0, 1);
    nameHolder.textContent = players[0].firstName;
    attemptHolder.textContent = players[0].attemptNumber;
    switch(players.length){
      case 9:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "Name: " + players[6].firstName + " " + players[6].attemptNumber;
        pos8.textContent = "Name: " + players[7].firstName + " " + players[7].attemptNumber;
        pos9.textContent = "Name: " + players[8].firstName + " " + players[8].attemptNumber;
        break;
      case 8:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "Name: " + players[6].firstName + " " + players[6].attemptNumber;
        pos8.textContent = "Name: " + players[7].firstName + " " + players[7].attemptNumber;
        pos9.textContent = "";
        break;
      case 7:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "Name: " + players[6].firstName + " " + players[6].attemptNumber;
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 6:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 5:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 4:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 3:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 2:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
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
    if(players[0].attemptNumber == 1){
      players.splice(0,1);
    } else {
      players[0].attemptNumber = players[0].attemptNumber-1;
      let temp = players[0];
      for(let i = 0; i < 4; i++){
        players[i] = players[i+1];
      }
      players[4] = temp;
    }
    nameHolder.textContent = players[0].firstName;
    attemptHolder.textContent = players[0].attemptNumber;
    pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
    pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
    pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
    pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
    pos6.textContent = "Next Up: " + players[5].firstName;
  } else {
    if(players[0].attemptNumber == 1){
      players.splice(0,1);
    } else {
      players[0].attemptNumber = players[0].attemptNumber-1;
      let temp = players[0];
      for(let i = 0; i < players.length; i++){
        players[i] = players[i+1];
      }
      players[players.length-1] = temp;
    }
    if(players.length != 0){
      nameHolder.textContent = players[0].firstName;
      attemptHolder.textContent = players[0].attemptNumber;
    }
    switch(players.length){
      case 9:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "Name: " + players[6].firstName + " " + players[6].attemptNumber;
        pos8.textContent = "Name: " + players[7].firstName + " " + players[7].attemptNumber;
        pos9.textContent = "Name: " + players[8].firstName + " " + players[8].attemptNumber;
        break;
      case 8:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "Name: " + players[6].firstName + " " + players[6].attemptNumber;
        pos8.textContent = "Name: " + players[7].firstName + " " + players[7].attemptNumber;
        pos9.textContent = "";
        break;
      case 7:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "Name: " + players[6].firstName + " " + players[6].attemptNumber;
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 6:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "Name: " + players[5].firstName + " " + players[5].attemptNumber;
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 5:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "Name: " + players[4].firstName + " " + players[4].attemptNumber;
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 4:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "Name: " + players[3].firstName + " " + players[3].attemptNumber;
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 3:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
        pos3.textContent = "Name: " + players[2].firstName + " " + players[2].attemptNumber;
        pos4.textContent = "";
        pos5.textContent = "";
        pos6.textContent = "";
        pos7.textContent = "";
        pos8.textContent = "";
        pos9.textContent = "";
        break;
      case 2:
        pos2.textContent = "Name: " + players[1].firstName + " " + players[1].attemptNumber;
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

function show(){
  let temp = document.createElement('p');
  let s = players.length + ".) " + displayName(players[players.length - 1]);
  let node = document.createTextNode(s);
  temp.appendChild(node);
  pList.appendChild(temp);
}

function displayName(p){  
  let aString = "";  
  if(p.attemptNumber == 1){
      aString = "first";
  } else if (p.attemptNumber == 2){
      aString = "second";
  } else if (p.attemptNumber == 3){
      aString = "last";
  } else {
      alert("something in the attempt number broke");
  }
  aString = aString + " attempt.";

  let displayString = p.firstName + " " + p.lastName + " on " + aString;
  return displayString;
}

function fiveAlive(){
  topSection.innerHTML = '';
  botSection.innerHTML = '';

  let name = document.createElement('h1');
  let s = displayName(players[0])
  let nameNode = document.createTextNode(s);
  name.appendChild(nameNode);

  topSection.appendChild(name);
}