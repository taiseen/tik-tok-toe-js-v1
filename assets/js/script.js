

// 22 Dec 2021 

let playerTurn = 'X';
const info = document.getElementById('playingInfo');
const box = document.getElementsByClassName('box');
// console.log(box);
// console.log(box[0].children);
// console.log(box[0].firstChild);

// console.log(Array.from(box))

const checkWin = () => {

    let boxText = document.querySelectorAll('.boxText');
    console.log(boxText[0]);

    let winingPossible = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 4, 8],
        [2, 4, 6],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
    ];

    winingPossible.forEach( v => {
        if(boxText){

        }    
        console.log(v)
    })
} 
checkWin();

const changeTurn = () => {
    return playerTurn === 'X' ? 'O' : 'X';
}


Array.from(box).forEach(parentElement => {

    let childText = parentElement.querySelector('.boxText');

    childText.addEventListener('click', () => {
        if (childText.innerHTML === '') {
            childText.innerHTML = playerTurn;
            playerTurn = changeTurn();
            info.innerHTML = `Now Turn to : <span id="now">${playerTurn}</span>`;;
        }

        console.log(childText.innerHTML);
    });

})