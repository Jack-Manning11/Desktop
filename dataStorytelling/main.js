const container = d3.select('.full-scroll');
const stepSel = container.selectAll('.step');
const paragraph = document.querySelector('#sticky-text');
const typewrite = document.querySelector('.typewriter');
const blueBook = document.getElementById('blue');
const redBook = document.getElementById('red');
const purpleBook = document.getElementById('purple');
const greenBook = document.getElementById('green');
const yellowBook = document.getElementById('yellow');
const bOfBBook = document.querySelector('.blankOfBlankBook');
const bAndBBook = document.querySelector('.blankAndBlankBook');


blueBook.addEventListener('click', ()=>{
    bOfBBook.style.display = "flex";
});
redBook.addEventListener('click', ()=>{
    alert("red");
});
yellowBook.addEventListener('click', ()=>{
    alert("yellow");
});
greenBook.addEventListener('click', ()=>{
    bAndBBook.style.display = "flex";
});
purpleBook.addEventListener('click', ()=>{
    alert("purple");
});


function updateChart(index) {
	const sel = container.select(`[data-index='${index}']`);
	const pic = sel.attr('data-pic');
    const text = sel.attr('data-text');
	document.getElementById('center').src=pic;
    typewrite.textContent = text;
    typewrite.classList.add("animate");
    setTimeout(() => {typewrite.classList.remove("animate")}, 2500);
  }
  
  function init() {  
	enterView({
	  selector: stepSel.nodes(),
	  offset: 0,
	  enter: el => {
		const index = +d3.select(el).attr('data-index');
		updateChart(index);
	  },
	  exit: el => {
		let index = +d3.select(el).attr('data-index');
		index = Math.max(0, index - 1);
		updateChart(index);
	  } });
  }
  
  init();

// References to DOM Elements
const book = document.querySelector("#book");
const openBook = document.querySelector('.open-book');
const nextCorner = document.querySelector('.next-corner');
const prevCorner = document.querySelector('.prev-corner');
const middleLine = document.querySelector('.middle-line');

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
nextCorner.addEventListener("click", goNextPage);
prevCorner.addEventListener("click", goPrevPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook.style.opacity = 100;
                paper1.style.zIndex = 3;
                paper1.classList.add("flipped");
                middleLine.style.opacity = 100;
                break;
            case 2:
                paper1.style.zIndex = 1;
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                nextCorner.style.display = "none";
                break;
            case 3:
                paper3.style.zIndex = 3;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                openBook.style.opacity = 0;
                middleLine.style.opacity = 0;
                break;
            case 3:
                paper2.classList.remove("flipped");
                nextCorner.style.display = "block";
                paper2.style.zIndex = 2;
                break;
            case 4:
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation--;
    }
}