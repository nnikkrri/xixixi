const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

yesBtn.addEventListener('click', ()=>
{
    question.innerHTML = "now you are my wife :D";
    gif.src = "https://media.tenor.com/AMGvy_bhgJMAAAAi/tkthao219-quby.gif";
});

noBtn.addEventListener('mouseover', ()=>
{
    const noBtnRec = noBtn.getBoundingClientRect();
    const maxX = window.innerWidth - noBtnRec.width;
    const maxY = window.innerHeight - noBtnRec.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
})