// SCRIPT
window.onload = function () {
  console.log('SCRIPT JS IS WORKING');
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;
  startButton.addEventListener("click", function () {
    console.log('START BUTTON IS WORKING');
    startGame();
  });

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
  }
  function handleKeyboardInput(key){
    if(key === "ArrowUp"){
      game.player.directionY = -1; // moving vertycally up = -1
    }
    else if(key === "ArrowDown"){
      game.player.directionY = 1;
    }
    else if(key === "ArrowLeft"){
      game.player.directionX = -1;
    }
    else if(key === "ArrowRight"){
      game.player.directionX = 1;
    }
  }
  window.addEventListener("keydown",(event)=>{ // keydown es pulsar cualquier tecla, keyUp es cuando dejas de pulsar
    handleKeyboardInput(event.key)
  })

};