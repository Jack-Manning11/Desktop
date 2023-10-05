const webDev = document.getElementById('webDev');
const gameDev = document.getElementById('gameDev');
const jukebox = document.getElementById('jukebox');
const dataStorytelling = document.getElementById('dataStorytelling');

const webDevContainer = document.querySelector('.webDev-container');
const gameDevContainer = document.querySelector('.gameDev-container');
const jukeboxContainer = document.querySelector('.jukebox-container');
const dataContainer = document.querySelector('.data-container');


jukebox.addEventListener('mouseenter', () => {
   jukeboxContainer.style.display = "block";
});

jukebox.addEventListener('mouseleave', () => {
    jukeboxContainer.style.display = "none";
});

dataStorytelling.addEventListener('mouseenter', () => {
    dataContainer.style.display = "block";
});
 
dataStorytelling.addEventListener('mouseleave', () => {
    dataContainer.style.display = "none";
});

gameDev.addEventListener('mouseenter', () => {
    gameDevContainer.style.display = "block";
});
 
gameDev.addEventListener('mouseleave', () => {
    gameDevContainer.style.display = "none";
});
 
webDev.addEventListener('mouseenter', () => {
    webDevContainer.style.display = "block";
});
  
webDev.addEventListener('mouseleave', () => {
    webDevContainer.style.display = "none";
});