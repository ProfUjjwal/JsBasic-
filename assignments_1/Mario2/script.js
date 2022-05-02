const Rows = window.prompt("Enter Number of NoRows");
const Columns = window.prompt("Enter Number of Columns");

// Making Grid (Front End Matrix)
let temp = ``;

for(let i = 0; i < Rows; i++) {
    let str = ``;
    for(let j=0 ; j<Columns ; j++) {
        if( (i+j)%2 == 0 ) {
            str += 
            `<td class = "white-cell"> 
            </td>` ;
        }
        else {
            str += 
            `<td class = "black-cell">
            </td>` ;
        }
    }

    temp = temp + `<tr>` + str + `</tr>`;
}

    // let Board = document.getElementsByClassName("board");
let Board=document.querySelector(".board");
Board.innerHTML = temp;

// Fixing the fruits in dummy Matrix (Backend Matrix)
let dummy = [];

for(let i=0 ; i<Rows ; i++) { // Creating Empty Cells
    dummy[i] = [];
}

for(let i=0 ; i<Rows ; i++) { // Filling Cells with 0
    for(let j=0 ; j<Columns ; j++) {
        dummy[i][j] = 0; 
    }
}

var num = parseInt((Columns * Rows)/2); console.log(num);
let NoOfFruits = 0;

while(num--) {
    let x = Math.floor((Math.random() * Rows) + 1);
    let y = Math.floor((Math.random() * Columns) + 1);
    
    if(x==1 && y==1) {
        continue;
    }

    if(dummy[x-1][y-1] == 0) {
        NoOfFruits++;
        dummy[x-1][y-1] = 1;
        Board.rows[x-1].cells[y-1].innerHTML = '<img src = "mushroom.jpeg" class = "fruit-image"></img>' // Update Front End;
    } 
}

var steps = 0;
let marioX = 0, marioY = 0;
var dir = "steady";
var interval;

showBoard();

interval = setInterval(movement, 500);

document.addEventListener('keydown', function(event) {
    const key = event.key;
    clearInterval(interval);

    if(key == "ArrowRight") dir = "right";
    else if(key == "ArrowLeft") dir = "left";
    else if(key == "ArrowUp") dir = "up";
    else if(key == "ArrowDown") dir = "down";

    interval = setInterval(movement, 500);
})

function movement() {

    steps++;

    if(NoOfFruits <= 0) { 
        alert("Game Finished");
    }
    if( dummy[marioX][marioY] == 1 ) {
        dummy[marioX][marioY] = 0;
        NoOfFruits--;
    } 

    if(dir == "steady") {
        ++marioY;
        dir = "right";
    }

    else if(dir == "right") {
        if(marioY == Columns-1) {
            dir = "left";
            --marioY; 
        }
        else ++marioY; 
    }

    else if(dir == "left") {
        if(marioY == 0) {
            dir = "right";
            ++marioY;
        }

        else --marioY;
    }

    else if(dir == "up") {
        if(marioX == 0) {
            dir = "down";
            ++marioX;
        }

        else --marioX;
    }

    else if(dir == "down") {
        console.log("sanja");
        if(marioX == Rows-1) {
            dir = "up";
            --marioX;
        }

        else ++marioX;
    }

    if(NoOfFruits <= 0) {
        alert(`Game Over. Steps taken are ${steps}`);
    }

    showBoard();
}

// Showing Board 
function showBoard() {
    for(let i=0 ; i<Rows ; i++) {
        for(let j=0 ; j<Columns ; j++) {
            if(i==marioX && j==marioY) {
                Board.rows[i].cells[j].innerHTML = `<img src = "mario.jpeg" class="show-mario"></img>`
            }

            else {
                
                if(dummy[i][j] == 1) {
                    Board.rows[i].cells[j].innerHTML = `<img src = "mushroom.jpeg" class="mushroom-image"></img>`;
                }

                else {
                    Board.rows[i].cells[j].innerHTML = ``;
                }
            }
        }
    } 
}



