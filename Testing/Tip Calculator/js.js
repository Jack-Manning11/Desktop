/*
document.getElementById("main").addEventListener("input",function(){
  content here
});
*/
let container = document.getElementById("main");
container.addEventListener("input", update);

function update(){
  let bill = Number(document.getElementById("yourBill").value); //.value needed to convert metadata into the actual user input
  let tipPercent = document.getElementById("tipInput").value;
  let split = document.getElementById("splitInput").value;

  let tipValue = bill * (tipPercent / 100);
  let tipEach = tipValue / split;
  let newBillEach = (bill + tipValue) / split;

  document.getElementById("tipPercent").innerHTML = tipPercent + "%";
  document.getElementById("tipValue").innerHTML = tipValue;
  document.getElementById("totalWithTip").innerHTML = bill + tipValue;
  document.getElementById("splitValue").innerHTML = split;
  document.getElementById("billEach").innerHTML = newBillEach;
  document.getElementById("tipEach").innerHTML = tipEach;
}
