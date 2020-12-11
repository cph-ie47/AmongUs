let canvas = document.querySelector("#canvas"); 
let ctx = canvas.getContext('2d');   //Fortæller at context/spillet er 2 dimensionelt element


 

//-------------------------------------------------------------------
//Billeder til mine tiles


//Avatars

let playerAvatar = new Image();
playerAvatar.src = 'images/player-Down.png'; //Player avatar

let soster = new Image();
soster.src = 'images/soster.png'; //Sister avatar

let enemyAvatar = new Image();
enemyAvatar.src = 'images/enemy.png'; //Enemy avatar

let enemyAvatar2 = new Image();
enemyAvatar2.src = 'images/enemy2.png'; //Enemy avatar 2


//Elemeneter

let gulvet = new Image(); 
gulvet.src = 'images/ground.png'; // Vejen 


let coins = new Image();
coins.src = 'images/coins.png'; //Coins point

let EmergencyButton = new Image();
EmergencyButton.src = 'images/EmergencyButton.png'; //Emergency knap

let nyPortal = new Image();
nyPortal.src = 'images/doors.jpg'; //Døre

let nyPortal2 = new Image();
nyPortal2.src = 'images/doors.jpg'; //Døre


//Mursten Level tiles


let graaMursten = new Image(); 
graaMursten.src = 'images/graaMursten.jpg'; // Maze 1 Mur


let blueMursten = new Image(); 
blueMursten.src = 'images/blueMursten.jpg'; // Maze 2 Mur


let redMursten = new Image(); 
redMursten.src = 'images/redMursten.jpg'; // Maze 3 Mur





//-------------------------------------------------------------------
//Mazes




// Definerer tiles til mazen
let goal = 0;
let vej = 1; 
let player = 2;
let lillesoster = 3;
let point = 4; 
let mursten1 = 5;
let mursten2 = 6;  
let mursten3 = 7;
let doors = 8;
let enemy = 9;
let enemy2 = 10;
let doors2 = 11;



// Vi derfinere størrelsen på de enkelte tiles, altså 40x40 px
let tileSize = 40;




// Førte Maze
let maze=
[
    [5,2,1,1,1,1,1,1,1,4,5,5,5,5,5],
    [5,1,5,5,5,5,5,5,9,5,1,1,1,4,5],
    [5,1,5,5,1,1,1,1,1,5,1,5,5,5,5],
    [5,1,5,5,1,5,5,1,1,1,1,1,5,5,5],
    [5,1,1,1,1,5,5,1,1,1,5,4,5,5,5],
    [5,1,1,5,1,5,5,5,1,1,5,5,5,5,4],
    [5,5,1,5,5,1,4,5,1,1,1,1,1,1,1],
    [5,5,1,1,5,1,5,1,1,1,1,1,1,5,5],
    [5,4,5,1,5,1,5,1,5,5,5,1,1,5,5],
    [5,1,1,1,1,1,1,1,1,1,10,5,1,1,5],
    [5,5,5,5,5,5,5,5,5,5,5,5,5,8,5],
    
]


// Anden maze
let maze2=
[
    [6,6,6,6,6,6,6,6,6,6,6,6,6,8,6],
    [6,6,6,6,6,6,1,4,6,6,6,6,6,2,6],
    [1,1,1,1,1,1,1,10,1,1,1,1,1,1,6],
    [1,6,6,6,6,6,1,1,1,6,4,6,6,6,6],
    [1,6,4,9,1,1,6,1,6,6,6,6,6,6,6],
    [1,6,1,1,1,10,6,1,6,1,1,1,9,1,6],
    [1,1,1,1,6,1,1,1,6,1,6,6,6,4,6],
    [6,1,6,1,3,6,6,6,6,1,6,9,6,1,6],
    [6,1,6,6,6,6,6,6,6,1,6,1,6,1,6],
    [6,1,1,1,1,1,1,1,1,1,1,1,1,1,6],
    [6,6,6,6,6,6,6,6,6,6,11,6,6,6,6],
    
]


// Tredje Maze
let maze3=
[
    [7,7,7,7,7,7,7,7,7,7,8,7,7,7,7],
    [7,9,1,1,1,9,1,1,1,1,2,7,7,7,7],
    [7,1,1,9,1,1,1,7,7,7,7,7,7,7,7],
    [7,1,7,7,7,7,7,7,7,7,1,4,7,7,7],
    [1,1,7,1,1,1,1,1,1,7,1,7,1,4,7],
    [1,10,1,1,10,7,7,7,1,7,1,7,1,7,7],
    [1,1,1,7,7,7,1,7,1,1,1,1,1,10,7],
    [7,7,7,4,7,7,1,7,7,7,1,7,7,7,7],
    [0,1,7,1,7,7,9,1,1,1,1,7,7,7,7],
    [1,10,7,1,1,1,1,1,7,7,7,7,7,7,7],
    [1,1,1,1,7,7,7,7,7,7,7,7,7,7,7],
]

let playerPosition = {x:9, y:9};







// Draw maze funktionen
function drawMaze(){

    for(let y= 0; y < maze.length; y++){

      for(let x = 0; x < maze[y].length; x++){

        if(maze[y][x] === vej){
            ctx.drawImage(gulvet,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === player){
            playerPosition.x = x; 
            playerPosition.y = y; 
            ctx.drawImage(playerAvatar,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === lillesoster){
            ctx.drawImage(soster,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === enemy){
            ctx.drawImage(enemyAvatar,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === enemy2){
            ctx.drawImage(enemyAvatar2,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === mursten1){
        ctx.drawImage(graaMursten,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === mursten2){
        ctx.drawImage(blueMursten,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === mursten3){
            ctx.drawImage(redMursten,x*tileSize,y*tileSize,tileSize,tileSize);
    
        }else if(maze[y][x] === point){
            ctx.drawImage(coins,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === doors){
            ctx.drawImage(nyPortal,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === doors2){
            ctx.drawImage(nyPortal2,x*tileSize,y*tileSize,tileSize,tileSize);

        }else if(maze[y][x] === goal){
            ctx.drawImage(EmergencyButton,x*tileSize,y*tileSize,tileSize,tileSize);

        }
        
      }
}};




//-------------------------------------------------------------------
//FUNKTIONER


//Fortæller at canvas/spillet i første omgang ikke skal vise sig.
canvas.style.display="none"; 




//Timer sættes til 
let seconds = 50;
document.querySelector('#timeLeft').innerText = seconds;
let time;

let popupText = document.querySelector('#popupText');





//YOU LOSE Funktionen
function youLoosedText(){
    
    canvas.style.display = "none"; 
   

    youLoosed.innerHTML="COLLECT ATLEAST 2 COINS FOR EVERY MAZE";
    let youLoosedText = document.querySelector('#youLoosed'); 


    //TimeOut funktion som henviser til spillets forside efter 3,5 sekund
    setTimeout(function(){
        location.href = "index.php";
    }, 3500);

    //Standser tiden helt
    clearInterval(time);  
}



//Forgot Your Sister functionen
function forgotSister(){
    
    canvas.style.display = "none"; 
   

    forgotSisterText.innerHTML="YOU FORGOT YOUR SISTER, TRY AGAIN..";
    let forgotSister = document.querySelector('#forgotSisterText'); 

    setTimeout(function(){
        location.href = "index.php";
    }, 3500);

    clearInterval(time);   
}





//Den skal ikke vise baggrundsbilledet når man dør
killed.style.display = "none";





//GameOver function  
function gameover(){
    canvas.style.display = "none";
    popupText.innerHTML="Game Over! Please try again..";
    killed.style.display = "block"; //Viser baggrundsbilledet når man dør

    //teksten
    let gameover = document.querySelector('#gameover');

    //Hvis sekunderne når absolut 0, spytter den en lyd ud og en tekst
    if(seconds == 0 ){
        gameover.innerHTML = "<span>You ran out of time. Try again..</span>";
        loosingSound()
    }; 

    setTimeout(function(){
        location.href = "index.php";
    }, 4500);


    clearInterval(time);    
};






//Får min player til at kigge på HØJRE - VENSTRE - OP - NED


function playerR() {
    playerAvatar.src = 'images/player-R.png';
}

function playerL() {
    playerAvatar.src = 'images/player-L.png';
}

function playerUp() {
    playerAvatar.src = 'images/player-Up.png';
}

function playerDown() {
    playerAvatar.src = 'images/player-Down.png';
}






//-------------------------------------------------------------------
//SPILLET STARTER





//Starter spillet
startgame.addEventListener('click', playgame);
function playgame(){
    
    //viser spillet 
    canvas.style.display = "block";

    //Knappen fjernes 
    startgame.style.display ="none";

    //Tema musik afspilles
    //themeSong();

    //Timeren starter med det samme
    time = setInterval(function () {
        seconds -= 1;
        document.querySelector('#timeLeft').innerText = seconds;
        
        //Når tiden bliver 0, kommer funktionen gameover.
        if(seconds == 0){
            gameover();
        };


        //Warning, når der er 12 sekunder tilbage 
        if (seconds == 12){
            warningSound();
        };

        if (seconds == 6){
            warningSound();
        };
    
    }, 1000); //Dvs 1000 millisekunder = 1 sekund
};






//LEVEL UP - NEWMAZE

function newMaze() {
    if(score >= 2){
        maze = maze2;
        levelUp();}

    if(score >= 4){
        maze = maze3;
        levelUp();}
};





//FINAL GOAL 

function finalGoal() {
    if (sister ==1 && score >=6){
        canvas.style.display = "none";
        popupText.innerHTML="Congratulations! You saved your baby sister! Great job!";

        victorySound();
        

        clearInterval(time); 
    }
};




//Lives
let livesLeft = 3;
let death = 1;
let livesText = document.querySelector('#livesLeft');
livesText.innerHTML = livesLeft ;

function numberOfLives() {
    livesLeft -= death;
    livesText.innerHTML = livesLeft ;

    if(livesLeft  == 0){
        gameover();
        loosingSound();
    };
};






//-------------------------------------------------------------------
//LYDE OG FUNKTIONER





//Lyde til spillet

function collectSound(){
    let audio = new Audio('gamesounds/pointSound.wav'); //Point lyde
    audio.play();
}

function themeSong(){
    let audio = new Audio('gamesounds/themeSong.mp3'); //Tema sang
    audio.play();
}

function levelUp(){
    let audio = new Audio('gamesounds/levelUp.mp3'); // Når man indtræder ny maze
    audio.play();
}

function babySound(){
    let audio = new Audio('gamesounds/babySound.wav'); //Lyden af lillesøsteren
    audio.play();
}

function loosingSound(){
    let audio = new Audio('gamesounds/loosingSound.mp3'); //Lyden af at tabe
    audio.play();
}

function enemySound(){
    let audio = new Audio('gamesounds/enemySound.wav'); // Når man går ind i enemies
    audio.play();
}

function victorySound(){
    let audio = new Audio('gamesounds/victorySound.mp3'); // Når man har vundet
    audio.play();
}

function warningSound(){
    let audio = new Audio('gamesounds/6sec.mp3'); // Når der er lidt tid tilbage
    audio.play();
}




//Walkable funktionen, der tillader os at få playeren til at kunne gå på specifikke tiles
function walkable(targetTile) {
    if (targetTile === vej || targetTile === enemy || targetTile === enemy2 ||  targetTile === lillesoster ||   targetTile === point || targetTile === doors || targetTile === doors2 || targetTile === goal) {
        return true;
    } else {
        return false;
    }
}


//Definere at de skal være 0, så de kan tælles op efter
let score = 0;
let sister = 0;



//-------------------------------------------------------------------
//PILTASTER OG DETS FUNKTIONER





// Definerer piletasterne, og deres funktion
window.addEventListener('keydown', (e) => {
    let targetTile;
    switch (e.keyCode) {
        case 37: // Piletast venstre
            targetTile = maze[playerPosition.y][playerPosition.x - 1];
            if (walkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x - 1] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = vej;
                playerL();
                drawMaze(); 
                if (targetTile === point) {
                    score++;
                    collectSound();
                    document.getElementById("pointScore").innerHTML = "Point: " + score;
                } 

                else if (targetTile === enemy || targetTile === enemy2){
                    numberOfLives();
                    enemySound();
                    document.getElementById("livesLeft").innerHTML = "" + livesLeft;
                } 
                
                
            }
            break;

        case 39: // Piletast højre
            targetTile = maze[playerPosition.y][playerPosition.x + 1];
            if (walkable(targetTile)) {
                maze[playerPosition.y][playerPosition.x + 1] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = vej;
                playerR();
                drawMaze();

                if (targetTile === point) {
                    score++;
                    collectSound();
                    document.getElementById("pointScore").innerHTML = "Point: " + score;
                } 

                else if (targetTile === lillesoster) {
                    sister++;
                    babySound();
                    document.getElementById("lillesosterFouned").innerHTML = "<b> YOU FOUND YOUR BABY SISTER </b> <br> Quick, find an emergencybutton to alert it!";
                }
                
                else if (targetTile === enemy  || targetTile === enemy2){
                    numberOfLives();
                    enemySound();
                    document.getElementById("livesLeft").innerHTML = "" + livesLeft;
                } 
                
                
                
            }
            break;

        case 38: // Piletast op
            targetTile = maze[playerPosition.y - 1][playerPosition.x];
            if (walkable(targetTile)) {
                maze[playerPosition.y - 1][playerPosition.x] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = vej;
                playerUp();
                drawMaze(); 
                
                if (targetTile === point) {
                    score++;
                    collectSound();
                    document.getElementById("pointScore").innerHTML = "Point: " + score;
                }

    

                else if(targetTile === goal || targetTile === doors || targetTile === doors2) {
                    finalGoal();

                    if (targetTile === doors && score <2){
                        youLoosedText();
                        loosingSound();
                    }

                    if (targetTile === doors2 && score <4){
                        youLoosedText();
                        loosingSound();
                    }

                    if (targetTile === goal && score <6){
                        youLoosedText();
                        loosingSound();
                    }

                    if (targetTile === goal && sister <1){
                        forgotSister();
                        loosingSound();
                    }


                }






                else if (targetTile === enemy || targetTile === enemy2){
                    numberOfLives();
                    enemySound();
                    document.getElementById("livesLeft").innerHTML = "" + livesLeft;
                } 
                
            }
            break;

        case 40: // Piletast ned
            targetTile = maze[playerPosition.y + 1][playerPosition.x];
            if (walkable(targetTile)) {
                maze[playerPosition.y + 1][playerPosition.x] = player; //players nye position
                maze[playerPosition.y][playerPosition.x] = vej;
                playerDown();
                

                if (targetTile === point) {
                    score++;
                    collectSound();
                    document.getElementById("pointScore").innerHTML = "Point: " + score;
                }
                
                if(targetTile === doors || targetTile === doors2) {
                    newMaze();  

                    if (targetTile === doors && score <2){
                        youLoosedText();
                        loosingSound();
                    }

                    if (targetTile === doors2 && score <4){
                        youLoosedText();
                        loosingSound();
                    }


                }

                
                else if (targetTile === enemy || targetTile === enemy2){
                    numberOfLives();
                    enemySound();
                    document.getElementById("livesLeft").innerHTML = "" + livesLeft;
                } 

                drawMaze();
            }
            break;
    }
   
})


//Preventer Default, så når man bruger piltasterne, navigere man ikke længere med dem på siden.
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);



// Vi loader mazen ved at bruge addEventListener
window.addEventListener("load", drawMaze);