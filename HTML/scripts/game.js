alert("Готов сосать?")

function gameControl(){
    if (document.getElementById("bgame").innerHTML == "Start"){
      startGame();
    }else{
      stopGame();
    }
}

function startGame() {
  document.getElementById("bgame").innerHTML='Stop'
  const x = Math.random()
}

function stopGame() {
  document.getElementById("bgame").innerHTML='Start'
}