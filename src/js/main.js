const box = document.querySelectorAll('.box');

function movingGoblin() {
     if(document.querySelector('.box_with_goblin')) {
        document.querySelector('.box_with_goblin').classList.remove("box_with_goblin");   
     }
    const random = Math.floor(Math.random() * 16);
    box[random].className = 'box box_with_goblin';
}
 setInterval(movingGoblin, 1000);