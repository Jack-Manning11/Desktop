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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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
        "heights":[]
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

});

miss.addEventListener('click', ()=>{

});

pass.addEventListener('click', ()=>{

});

function appendColumn() {
    var tbl = document.getElementById('my-table'), i;
    for (i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'col',i);
    }
}
function createCell(cell, text, style, position) {
    var div = document.createElement('div'),
    txt = document.createTextNode(text);
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
    var tbl = document.getElementById('my-table'), row = tbl.insertRow(tbl.rows.length), i;
    for (i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), textContent, 'row',i);
    }
}