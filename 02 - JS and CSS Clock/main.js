const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const clockLetter = document.querySelector(".clock_letter");

function setClock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  let hourDeg = hours * (360 / 12) + 90;
  let minuteDeg = minutes * (360 / 60) + 90;
  let secondDeg = seconds * (360 / 60) + 90;

  hourHand.style.transform = `rotate(${hourDeg}deg)`;
  minHand.style.transform = `rotate(${minuteDeg}deg)`;
  secondHand.style.transform = `rotate(${secondDeg}deg)`;
  clockLetter.innerHTML = `${formatSetter(hours)}:${formatSetter(
    minutes
  )}:${formatSetter(seconds)}`;
}

function formatSetter(time) {
  if (time < 10) time = "0" + time;
  return time;
}

setInterval(setClock, 1000);
