function switchTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tabLinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

let data = [];
let activePlayers = [];
let heightNum = 0;
const form = document.querySelector('form');
const make = document.getElementById('make');
const miss = document.getElementById('miss');
const pass = document.getElementById('pass');
const columns = document.querySelector('.right');
const next = document.getElementById('next');
const activePlayer = document.querySelector('.activePlayer');
const otherPlayers = document.querySelector('.otherPlayers');
document.getElementById("defaultOpen").click();

let tempPlayers = [
    {
        "fname": "Abby",
        "lname": "Powers",
        "school": "Kenyon College",
        "startingheight": "6'2''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":0
    },
    {
        "fname": "Ben",
        "lname": "Adams",
        "school": "Barnard College",
        "startingheight": "6'0''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":1
    },
    {
        "fname": "Charlie",
        "lname": "Hood",
        "school": "Colorado College",
        "startingheight": "6'1''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":2
    },
    {
        "fname": "Dan",
        "lname": "Irwin",
        "school": "Wake Forest University",
        "startingheight": "6'2''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":3
    },
    {
        "fname": "Edward",
        "lname": "Hart",
        "school": "Vassar College",
        "startingheight": "6'0''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":4
    },
    {
        "fname": "Frank",
        "lname": "Carr",
        "school": "Carnegie Mellon University",
        "startingheight": "6'2''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":5
    },
    {
        "fname": "Greg",
        "lname": "Stone",
        "school": "Centre College",
        "startingheight": "5'4''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":6
    },
    {
        "fname": "Hank",
        "lname": "Foster",
        "school": "Oberlin College",
        "startingheight": "6'4''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":7
    },
    {
        "fname": "Isaac",
        "lname": "Hudson",
        "school": "Haverford College",
        "startingheight": "6'2''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":8
    },
    {
        "fname": "James",
        "lname": "Douglas",
        "school": "Harvard College",
        "startingheight": "6'0''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":9
    },
    {
        "fname": "Kelly",
        "lname": "Anthony",
        "school": "Villanova University",
        "startingheight": "6'2''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":10
    },
    {
        "fname": "Luke",
        "lname": "Grimes",
        "school": "Columbia University",
        "startingheight": "6'2''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":11
    },
    {
        "fname": "Mark",
        "lname": "Dyer",
        "school": "Georgetown University",
        "startingheight": "6'3''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":12
    },
    {
        "fname": "Ned",
        "lname": "Shields",
        "school": "Trinity College",
        "startingheight": "5'11''",
        "attemptNum": 0,
        "bestHeight": 0,
        "active": true,
        "currHeight": [],
        "heights":[],
        "id":13
    }
]

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
    let s = temp[0] + " " + temp[1];
    appendRow(s);
});

function columnCreator(){
    for(let i = 0; i < tempPlayers.length; i++){
        let temp = document.createElement('p');
        let s = tempPlayers[i].fname + " " + tempPlayers[i].lname;
        let node = document.createTextNode(s);
        temp.appendChild(node);
        columns.appendChild(temp);
    }
}

make.addEventListener('click', ()=>{
    activePlayers[0].currHeight[activePlayers[0].attemptNum] = "O";
    activePlayers[0].heights.push(activePlayers[0].currHeight);
    activePlayers[0].currHeight = [];
    activePlayers.splice(0,1);
    let cell= document.getElementById("my-table").rows[activePlayers[0].id].cells;
    cell[heightNum].textContent = "O";
    //document.getElementById("my-table").rows[1].cells.item(1).textcontent = "testing";
    activeHandling();
});

miss.addEventListener('click', ()=>{
    //activePlayers[0].currHeight[activePlayers[0].attemptNum] = "X";
    //document.getElementById("my-table").rows[RowIndex].cells.item(CellIndex).textcontent = "X";
});

pass.addEventListener('click', ()=>{

});

next.addEventListener('click', ()=>{
    let nextHeight = prompt("Please enter the next height");
    activePlayers = [];
    for (let i = 0; i < tempPlayers.length; i++){
        if(tempPlayers[i].active == true){
            activePlayers.push(tempPlayers[i]);
        }
    }
    appendColumn(nextHeight);
    activeHandling();
    heightNum+=1;
});

function appendColumn(textContent) {
    let tbl = document.getElementById('my-table'), i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), textContent, 'col',i);
    }
}
function createCell(cell, text, style, position) {
    if(position != 0 && style == 'col'){
        text = " ";
    }
    let div = document.createElement('div');
    let txt = document.createTextNode(text);
    div.appendChild(txt);
    div.setAttribute('class', style);
    if(position == 0){
        if(style == 'col'){
            div.className = "colHeader";
        } else if(style == 'row'){
            div.className = "rowHeader";
        }
    }
    cell.appendChild(div);
}

function appendRow(textContent) {
    let tbl = document.getElementById('my-table'), row = tbl.insertRow(tbl.rows.length), i;
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), textContent, 'row',i);
    }
}

//document.getElementById("my-table").rows[RowIndex].cells.item(CellIndex).textcontent = "";

for(let i = 0; i < tempPlayers.length; i++){
    let s = tempPlayers[i].fname + " " + tempPlayers[i].lname;
    appendRow(s);
}

function displayName(p){  
    let aString = "";  
    if(p.attemptNum == 0){
        aString = "first";
    } else if (p.attemptNum == 1){
        aString = "second";
    } else if (p.attemptNum == 2){
        aString = "last";
    } else {
        alert("something in the attempt number broke");
    }
    aString = aString + " attempt.";
  
    let displayString = p.fname + " " + p.lname + " on " + aString;
    return displayString;
}

function activeHandling(){
    activePlayer.innerHTML = "";
    let div = document.createElement('div');
    let text = displayName(activePlayers[0]);
    let txt = document.createTextNode(text);
    div.appendChild(txt);
    activePlayer.appendChild(div);
    let botDiv = document.createElement('div');

    if(activePlayers.length > 9){
        otherPlayers.innerHTML = "";
        for(i = 1; i < 5; i++){
            let text = displayName(activePlayers[i]);
            let txt = document.createTextNode(text);
            let spacing = document.createElement('br');
            botDiv.appendChild(txt);
            botDiv.appendChild(spacing);
        }
        otherPlayers.append(botDiv);
    } else {
        otherPlayers.innerHTML = "";
        for(i = 1; i < activePlayers.length; i++){
            let text = displayName(activePlayers[i]);
            let txt = document.createTextNode(text);
            let spacing = document.createElement('br');
            botDiv.appendChild(txt);
            botDiv.appendChild(spacing);
        }
        otherPlayers.append(botDiv);
    }
}