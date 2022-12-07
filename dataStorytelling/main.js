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
const theOneWordBook = document.querySelector('.theOneWordBook');
const oneWordBook = document.querySelector('.oneWordBook');
const theAdjNounBook = document.querySelector('.theAdjNounBook');

const library = document.querySelector('.library');
const backButton = document.querySelector('#backButton');
var bookIndex = 0;
const openBook = document.querySelectorAll('.open-book');
const nextCorner = document.querySelectorAll('.next-corner');
const prevCorner = document.querySelectorAll('.prev-corner');
const middleLine = document.querySelectorAll('.middle-line');
const dividerLine = document.querySelectorAll('.divider-line')

const paper1 = document.querySelectorAll("#p1");
const paper2 = document.querySelectorAll("#p2");
const paper3 = document.querySelectorAll("#p3");

nextCorner[0].addEventListener("click", goNextPage);
prevCorner[0].addEventListener("click", goPrevPage);
nextCorner[1].addEventListener("click", goNextPage);
prevCorner[1].addEventListener("click", goPrevPage);
nextCorner[2].addEventListener("click", goNextPage);
prevCorner[2].addEventListener("click", goPrevPage);
nextCorner[3].addEventListener("click", goNextPage);
prevCorner[3].addEventListener("click", goPrevPage);
nextCorner[4].addEventListener("click", goNextPage);
prevCorner[4].addEventListener("click", goPrevPage);

blueBook.addEventListener('click', ()=>{
    bOfBBook.style.display = "flex";
    backButton.style.display = "block";
    bookIndex = 0;
    nextCorner[0].style.display = "block";
});
redBook.addEventListener('click', ()=>{
    oneWordBook.style.display = "flex";
    backButton.style.display = "block";
    bookIndex = 3;
    nextCorner[3].style.display = "block";
});
yellowBook.addEventListener('click', ()=>{
    theOneWordBook.style.display = "flex";
    backButton.style.display = "block";
    bookIndex = 4;
    nextCorner[4].style.display = "block";
});
greenBook.addEventListener('click', ()=>{
    bAndBBook.style.display = "flex";
    backButton.style.display = "block";
    bookIndex = 1;
    nextCorner[1].style.display = "block";
});
purpleBook.addEventListener('click', ()=>{
    theAdjNounBook.style.display = "flex";
    backButton.style.display = "block";
    bookIndex = 2;
    nextCorner[2].style.display = "block";
});
backButton.addEventListener('click', ()=> {
    bOfBBook.style.display = "none";
    bAndBBook.style.display = "none";
    theAdjNounBook.style.display = "none";
    theOneWordBook.style.display = "none";
    oneWordBook.style.display = "none";
    backButton.style.display = "none";
    currentLocation = 1;
    paper1[bookIndex].classList.remove("flipped");
    paper2[bookIndex].classList.remove("flipped");
    paper1[bookIndex].style.zIndex = 3;
    openBook[bookIndex].style.opacity = 0;
    middleLine[bookIndex].style.opacity = 0;
    dividerLine[bookIndex].style.opacity = 0;
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

//blank of blank book


let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook[bookIndex].style.opacity = 100;
                paper1[bookIndex].style.zIndex = 3;
                paper1[bookIndex].classList.add("flipped");
                middleLine[bookIndex].style.opacity = 100;
                dividerLine[bookIndex].style.opacity = 100;
                prevCorner[bookIndex].style.display = "block";
                break;
            case 2:
                paper1[bookIndex].style.zIndex = 1;
                paper2[bookIndex].classList.add("flipped");
                paper2[bookIndex].style.zIndex = 2;
                nextCorner[bookIndex].style.display = "none";
                break;
            case 3:
                paper3[bookIndex].style.zIndex = 3;
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
                paper1[bookIndex].classList.remove("flipped");
                paper1[bookIndex].style.zIndex = 3;
                openBook[bookIndex].style.opacity = 0;
                middleLine[bookIndex].style.opacity = 0;
                dividerLine[bookIndex].style.opacity = 0;
                prevCorner[bookIndex].style.display = "none";
                break;
            case 3:
                paper2[bookIndex].classList.remove("flipped");
                nextCorner[bookIndex].style.display = "block";
                paper2[bookIndex].style.zIndex = 2;
                break;
            case 4:
                paper3[bookIndex].style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation--;
    }
}