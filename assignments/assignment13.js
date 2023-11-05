//HTML references
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//randomValue
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//variables to declare
let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = ["Anthony", "Gooby Snoober", "Tax Frog"];
const insertY = ["ATLAS Building", "", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

//event listener
randomize.addEventListener('click', result);

//method or function
function result(){
  let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:', xItem);
  newStory = newStory.replaceAll(':inserty:', yItem);
  newStory = newStory.replaceAll(':insertz:', zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/2.205) + " kilograms";
    const temperature =  `${Math.round(94 * 5/9)} celsius`;
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
  }

  let div = document.createElement('div');
  div.classList.add('red');
  let txt = document.createTextNode(xItem);
  div.appendChild(txt)
  story.style.visibility = 'visible';
}