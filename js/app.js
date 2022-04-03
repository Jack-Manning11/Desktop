document.getElementById("btn").addEventListener("click",function(){
	alert("Hello, World!");
});
var image = document.getElementById("hovering");
image.onmouseover = function()
{
	image.src = "../img/tree-photo.jpg";
}
image.onmouseout = function()
{
	image.src = "../img/Personal_Photo.jpg";
}
