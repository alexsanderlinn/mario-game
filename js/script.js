const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
var scoreElement = document.getElementById('score');
let score = 0;

const jump = () => {
    mario.classList.add('jump');
    score ++ ; // Increment the score when the space key is pressed
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
    
}

const loop = setInterval(() => {

    console.log('loop')

    const pipePosition = pipe.offsetLeft;
    const marioPosition = + window.getComputedStyle(mario).bottom.replace('px','');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100 ) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./img/game-over.png";
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        window.alert('game over')

        clearInterval(loop);
    } 

    // Update score display
    scoreElement.innerHTML = `Your Score: ${score}`;

},10);

document.addEventListener('keydown', jump);