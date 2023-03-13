//prv del od domasnata
let timerId;
let elapsedTime=0;
function formattedTime(milliseconds){
    const totalSeconds=Math.floor(milliseconds/1000);
    const minutes=Math.floor(totalSeconds/60);
    const seconds=totalSeconds % 60;
    const formattedMinutes= String(minutes).padStart(2,"0");
    const formattedSeconds= String(seconds).padStart(2,"0");
    return `{formattedMinutes}:{formattedSeconds}`;
}

function startTimer() {
    timerId=setInterval(updateTimer,1000);
}
function pauseTimer() {
    clearInterval(timerId);
    timerId=null;
}

function stopTimer(){
    clearInterval(timerId);
    timerId=null;
    elapsedTime=0;
    console.log("Timer stoped");
}

function updateTimer(){
    elapsedTime++;
 
    console.log(elapsedTime);
}
document.getElementById("startBtn").addEventListener("click",() =>{
    if(!timerId){
        startTimer();
    }
})
document.getElementById("pauseBtn").addEventListener("click",() =>{
    if(timerId){
        pauseTimer();
    }
})
document.getElementById("stopBtn").addEventListener("click",() =>{
        stopTimer();
})

//vtor del od domasnata

let timeoutId;

function startDelayedCountdown(delaySeconds, countTo) {
  let count = 0;
  timeoutId = setTimeout(function tick() {
    console.log(count);
    count++;
    if (count <= countTo) {
      timeoutId = setTimeout(tick, 1000);
    }
  }, delaySeconds * 1000);
}

function stopDelayedCountdown() {
  clearTimeout(timeoutId);
}

//tret del od domasnata
//https://www.youtube.com/watch?v=_7rT-ixivWU- ova e linkot sto bese vo 3tiot del od domasnata

const url=new URL("https://www.youtube.com/watch?v=_7rT-ixivWU");

console.log("Protocol: " + url.protocol);
console.log("Host " + url.host);
console.log("Pathname " + url.pathname);
console.log("Search " + url.search);

