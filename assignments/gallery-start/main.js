const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const obj = [
    {'src': `images/pic${1}.jpg`,
    'alt': 'eye'
    }, {'src': `images/pic${2}.jpg`,'alt': 'swoosh'}, {'src': `images/pic${3}.jpg`,'alt': 'flower'},{'src': `images/pic${4}.jpg`,'alt': 'art'}, {'src': `images/pic${5}.jpg`,'alt': 'butterfly'}];

for(let i = 0; i < obj.length; i++){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', obj[i].src);
    newImage.setAttribute('alt', obj[i].alt);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.src = newImage.src;
    });
}

btn.addEventListener('click', () => {
    if(btn.getAttribute('class') === "Dark"){
        btn.setAttribute('class', "Light");
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        btn.setAttribute('class', "Dark");
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    }
});