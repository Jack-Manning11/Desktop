const book = document.querySelector('.book');
const intro = document.querySelectorAll('.intro');
const covers = document.querySelectorAll('.cover');
const content = document.querySelectorAll('.content');
const nextPage = document.querySelector('.btn-next');
const backs = document.querySelectorAll('.backside')
let count=1;

book.addEventListener('click', () => {
    covers[0].classList.add("turn");
    for(let i = 0; i < intro.length; i++){
        intro[i].classList.add("turn");
    }
    covers[1].classList.add("last");
});

nextPage.addEventListener('click', () => {
    let pageNum = content.length - count;
    content[pageNum].classList.add("turn");
    content[pageNum].classList.add("active");
    backs[pageNum-1].classList.add("on");
    if(pageNum < content.length - 1){
        content[pageNum+1].classList.remove("active");
        backs[pageNum].classList.remove("on");
    }
    count += 1;
});
