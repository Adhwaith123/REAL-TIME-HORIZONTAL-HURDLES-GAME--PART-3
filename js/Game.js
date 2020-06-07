class Game {
  constructor(){

  }

  getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    player1 = createSprite(100,200);
    player1.addImage("1",player1image);
    player1.scale = 0.4;
    player2 = createSprite(300,200);
    player2.addImage("2",player2image);
    player2.scale = 0.4;
    player3 = createSprite(500,200);
    player3.addImage("3",player3image);
    player3.scale = 0.4;
    player4 = createSprite(700,200);
    player4.addImage("4",player4image);
    player4.scale = 0.4;
        player4.addImage("4",player4image);
    player4.scale = 0.4;
   players = [player1, player2, player3,player4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
     image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
     //track.scale = 0.1;
      var display_position = 100;
      
      //index of the array
      var index = 0;

      //x and y position of the cars
      var y = 250;
      var x;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        y = y+ 200;
        //use data form the database to display the cars in y direction
        x = displayHeight - allPlayers[plr].distance;
        players[index-1].position.y = y;
        players[index-1].position.x = x;

        if (index === player.index){
         players[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = players[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    // if(keyIsDown("space")) {
    //   players.velocity = -10;
    //   player.update();
    // }
    
    if(keyIsDown(LEFT_ARROW)) {
     player1.distance += 10;
    // player1.velocity.y = 0;
      player.update();
    }
    if(keyIsDown(LEFT_ARROW)) {
      player2.velocity.x = -4;
      player2.velocity.y = 0;
       player.update();
     }
     if(keyIsDown(LEFT_ARROW)) {
      player3.velocity.x = -4;
      player3.velocity.y = 0;
       player.update();
     }
     if(keyIsDown(LEFT_ARROW)) {
      player4.velocity.x = -4;
      player4.velocity.y = 0;
       player.update();
     }
if(player.distance>4100){
  gameState = 2;
}
    drawSprites();
  }
  end(){
    console.log("gamended");
    game.update(2);
  }
}
