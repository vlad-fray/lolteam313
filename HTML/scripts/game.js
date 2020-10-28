
// врубает игру или выключает по нажатии на кнопку
function gameControl(){
    if (document.getElementById("bgame").innerHTML == "Start"){
      startGame();
    }else{
      stopGame();
    }
}

//показывает скрытую кнопку с картинкой
function startGame() {
  document.getElementById("igame").style.display = "block"
  document.getElementById("bgame").innerHTML='Stop'
  startTimer()
}

//останавливает игру, возвращает время и счёт к стартовым, сохраняет рекорд
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

//устанавливает и перемещает положение "крота", проигрывает звук
function imageControl() {
  let arrGameImages = ['images/game.png','images/game2.png','images/game3.png']
  let countImage = Math.floor(Math.random() * 3)
  document.getElementById("image").src = arrGameImages[countImage]
  
  
  let num = +document.getElementById("cgame").innerHTML++
  let top = String(Math.round(Math.random() * 300)) + "px"
  let left = String(Math.round(Math.random() * 550)) + "px"

  document.getElementById("igame").style.margin = "0"
  document.getElementById("igame").style.marginTop = top
  document.getElementById("igame").style.marginLeft = left
 
  playSound()
}

//создание отдельный звуков
function playSound() {
  let arrGameSounds = ['sounds/ah.mp3','sounds/ah2.mp3','sounds/ah3.mp3']
  let countSounds = Math.floor(Math.random() * 3)
  let snd = new Audio()
  snd.src = arrGameSounds[countSounds]
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
