

function gameControl(){
    if (document.getElementById("bgame").innerHTML == "Start"){
      startGame();
    }else{
      stopGame();
    }
}

function startGame() {
  document.getElementById("igame").style.display = "block"
  document.getElementById("bgame").innerHTML='Stop'
  startTimer()
}

function stopGame() {
  document.getElementById("bgame").innerHTML='Start'
  document.getElementById("igame").style.display = "none"
  
  if (document.getElementById("cgame").innerHTML > 
    document.getElementById("rgame").innerHTML) {
    document.getElementById("rgame").innerHTML = 
    document.getElementById("cgame").innerHTML
  }

  document.getElementById("cgame").innerHTML="0"
  clearTimeout(timerId);
  document.getElementById("tgame").innerHTML="00:10"
}

function imageControl() {
  let num = +document.getElementById("cgame").innerHTML++
  let top = String(Math.round(Math.random() * 300)) + "px"
  let left = String(Math.round(Math.random() * 550)) + "px"

  document.getElementById("igame").style.margin = "0"
  document.getElementById("igame").style.marginTop = top
  document.getElementById("igame").style.marginLeft = left
 
  playSound()
}

function playSound() {
  let snd = new Audio()
  snd.src = "sounds/ah.mp3"
  snd.play()
}


function startTimer() {
  var game_timer = document.getElementById("tgame").innerHTML;
  var arr = game_timer.split(":");
  var m = arr[0];
  var s = arr[1];
  if (s == 0) {
    if (m == 0) {
      stopGame();
      return
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  }else s--;
  
  if (s < 10) s = "0" + s;
  document.getElementById("tgame").innerHTML = m+":"+s;
  timerId = setTimeout(startTimer, 1000);
}
