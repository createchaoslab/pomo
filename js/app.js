const pomo = document.querySelector(".pomo");
const longBreak = document.querySelector(".long-break");
const shortBreak = document.querySelector(".short-break");
const startBtn = document.querySelector(".start-btn");
const timeMin = document.querySelector(".time-min");
const timeSec = document.querySelector(".time-sec");
const btns = document.querySelector(".btns");
const setTimes = document.querySelector(".set-times");
const setTimesBtn = document.querySelector(".set-time img");
const time1 = document.querySelector(".time1");
const time2 = document.querySelector(".time2");
const time3 = document.querySelector(".time3");
let timerInt;
let timeChoose;

var startAudio = document.querySelector(".start-audio"); 
var stopAudio = document.querySelector(".stop-audio"); 

function playAudio() { 
  startAudio.play(); 
}
  stopAudio.play(); 

function timer(timeChoose = 10) {
  let sec = 00;
  let min = timeChoose;
  timerInt = setInterval(timerF, 1000);
  function timerF() {
    if (sec === 0) {
      sec = 59;
      min--;
    } else {
      sec--;
    }
    if (sec < 10) {
      timeSec.textContent = `0${sec}`;
    } else {
      timeSec.textContent = `${sec}`;
    }
    if (min < 10) {
      timeMin.textContent = `0${min}`;
    } else {
      timeMin.textContent = `${min}`;
    }
    if (sec <= 0 && min <= 0) {
      clearInterval(timerInt);
      timeSec.textContent = `00`;
      timeMin.textContent = `00`;
      stopAudio.play(); 
    }
  }
}


time1.addEventListener("click", function () {
  clearInterval(timerInt);
  timeChoose = 20;
  setTimes.classList.remove("active-time");
  startBtn.removeAttribute("disabled", "disabled");
  pomo.classList.add("active");
  longBreak.classList.remove("active");
  shortBreak.classList.remove("active");
  startBtn.classList.add("active-btn");
  timeSec.textContent = `00`;
  timeMin.textContent = `20`;
});

time2.addEventListener("click", function () {
  clearInterval(timerInt);
  timeChoose = 40;
  setTimes.classList.remove("active-time");
  startBtn.removeAttribute("disabled", "disabled");
  pomo.classList.add("active");
  longBreak.classList.remove("active");
  shortBreak.classList.remove("active");
  startBtn.classList.add("active-btn");
  timeSec.textContent = `00`;
  timeMin.textContent = `40`;
  
});
time3.addEventListener("click", function () {
  setTimes.classList.remove("active-time");
  timeChoose = 60;
  clearInterval(timerInt);
  startBtn.removeAttribute("disabled", "disabled");
  pomo.classList.add("active");
  longBreak.classList.remove("active");
  shortBreak.classList.remove("active");
  startBtn.classList.add("active-btn");
  timeSec.textContent = `00`;
  timeMin.textContent = `60`;
 
});
shortBreak.addEventListener("click", function () {
  clearInterval(timerInt);
  pomo.classList.remove("active");
  longBreak.classList.remove("active");
  shortBreak.classList.add("active");
  startBtn.classList.remove("active-btn");
  startBtn.removeAttribute("disabled", "disabled");
  timeSec.textContent = `00`;
  timeMin.textContent = `01`;
  timer(1);
});

longBreak.addEventListener("click", function () {
  startBtn.classList.remove("active-btn");
  pomo.classList.remove("active");
  longBreak.classList.add("active");
  shortBreak.classList.remove("active");
  startBtn.removeAttribute("disabled", "disabled");
  timeSec.textContent = `00`;
  timeMin.textContent = `05`;
  console.log("clear");
  clearInterval(timerInt);
  timer(5);
});
pomo.addEventListener("click", function () {
  startBtn.removeAttribute("disabled", "disabled");
  pomo.classList.add("active");
  longBreak.classList.remove("active");
  shortBreak.classList.remove("active");
  startBtn.classList.add("active-btn");
  timeSec.textContent = `00`;
  timeMin.textContent = `10`;
  clearInterval(timerInt);
});
startBtn.addEventListener("click", function () {
  timer(timeChoose)
  startBtn.setAttribute("disabled", "disabled");
});

setTimesBtn.addEventListener("click", function () {
  setTimes.classList.toggle("active-time");
});
