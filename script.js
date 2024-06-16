const daysEl = document.querySelector(".days");
const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");

// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const lauchingDate = new Date(2024, 5, 30, 20, 0, 0);
const currentDate = new Date();
console.log(lauchingDate);
console.log(currentDate);


function timeLeft() {
  const duration = lauchingDate - currentDate;
  let days = Math.floor(duration / 24 / 60 / 60 / 1000);
  let hours = Math.floor((duration / 1000 / 60 / 60)) % 24;
  let minutes = Math.floor((duration / 1000 / 60)) % 60;
  let seconds = Math.floor((duration / 1000)) % 60;

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;
//   days = days < 10 ? "0" + days : days;

//   daysEl.innerHTML = days ;
//   hoursEl.innerHTML = hours ;
//   minutesEl.innerHTML = minutes;
//   secondsEl.innerHTML = seconds ;

  console.log(seconds);
}

setInterval(timeLeft, 1000);


