let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";
function togglemenu(){
  if(menuList.style.maxHeight == "0px")
  {
    menuList.style.maxHeight = "130px";
  }
  else
  {
    menuList.style.maxHeight = "0px";
  }
}
