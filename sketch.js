var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var obstacles;
var players, player1, player2, player3, player4,player1image,player2image,player3image,player4image,track,ground;

function preload(){
  player1image = loadImage("images/runner 1.png");
  player2image = loadImage("images/runner 1.png");
  player3image = loadImage("images/runner 1.png");
  player4image = loadImage("images/runner 1.png");
  track = loadImage("images/track1.jpg");
 // track.scale = 0.5;
  //ground = loadImage("images/ground.png");
}



function setup(){

  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }


  //track.velocity.x = -4;
      // if(keyIsDown("space")) {
    //   players.velocity = -10;
    //   player.update();
    // }
    
    if(keyIsDown(LEFT_ARROW)) {
      players.velocityX = -4;
       player.update();
     }
  if(gameState === 1){
    clear();
    game.play();
  }
}
