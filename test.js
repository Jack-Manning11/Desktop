var randomKey;
var r;
var numDesired;

window.onload = function(){
  randomizer();
};
window.setInterval(function(){
  randomizer();
}, 1000);

function randomizer(){
  var show = document.getElementById('output');
  r = 97 + Math.floor(Math.random() * 26);
  randomKey = String.fromCharCode(r);
  numDesired = Math.floor(Math.random() * 10);
  show.innerHTML = "Please press " + randomKey + " to enter " + numDesired;
}

function checkPressed(key){
  var keyNum;
  if(window.event) {
    keyNum = key.key;
  }
  else if(key.which){
    keyNum = key.key;
  }
  if(keyNum == randomKey){
    var current = document.getElementById("showNum").innerHTML;
    document.getElementById("showNum").innerHTML = current + numDesired;
  }
}

function checkUp(key)
{
  var keyNum;
  if(window.event) {
    keyNum = key.key;
  }
  else if(key.which){
    keyNum = key.key;
  }
  if(keyNum == randomKey){
    var current = document.getElementById("showNum").innerHTML;
    document.getElementById("showNum").innerHTML = current - numDesired;
  }
  else {
    alert("You messed up :(")
    document.getElementById("showNum").innerHTML = "";
  }
}
