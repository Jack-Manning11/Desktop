let topSection = document.querySelector('.first');
let botSection = document.querySelector('.second');

const pList = document.querySelector('.activePlayers');

const yes = document.querySelector('#yes')
const no = document.querySelector('#no');

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
  fiveAlive();
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
  if(players.length != 0){
    players.splice(0, 1);
    fiveAlive();
  }
});

no.addEventListener('click', ()=>{
  if(players.length > 9){
    if(players[0].attemptNumber == 3){
      players.splice(0,1);
      fiveAlive();
    } else {
      players[0].attemptNumber += 1;
      let temp = players[0];
      for(let i = 0; i < 4; i++){
        players[i] = players[i+1];
      }
      players[4] = temp;
      fiveAlive();
    }
  } else if(players.length != 0){
    if(players[0].attemptNumber == 3){
      players.splice(0,1);
      fiveAlive();
    } else {
      players[0].attemptNumber += 1;
      let temp = players[0];
      for(let i = 0; i < players.length; i++){
        players[i] = players[i+1];
      }
      players[players.length-1] = temp;
      fiveAlive();
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

  if(players.length > 9){
    for(let i = 1; i < 5; i++){
      let pname = document.createElement('p');
      let p = displayName(players[i]);
      let pNode = document.createTextNode(p);
      pname.appendChild(pNode);
      botSection.appendChild(pname);
    }
    let pname = document.createElement('p');
    let p = "Next up " + displayName(players[i]);
    let pNode = document.createTextNode(p);
    pname.appendChild(pNode);
    botSection.appendChild(pname);
  }
  else {
    for(let i = 1; i < players.length; i++){
      let pname = document.createElement('p');
      let p = displayName(players[i]);
      let pNode = document.createTextNode(p);
      pname.appendChild(pNode);
      botSection.appendChild(pname);
    }
  }
}
