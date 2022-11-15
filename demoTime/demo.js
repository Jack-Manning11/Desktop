// References to DOM Elements
const book = document.querySelector("#book");
const container = document.querySelector('.container');
const openBook = document.querySelector('.open-book');
const nextCorner = document.querySelector('.next-corner');
const prevCorner = document.querySelector('.prev-corner');

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