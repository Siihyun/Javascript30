function playAudio(event) {
  const key = event.key;
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const kbd = document.querySelector(`div[data-key=${key}]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  kbd.classList.add("playing");
}

function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  const kbd = event.target;
  kbd.classList.remove("playing");
}

const key = document.querySelector(".keys");

key.addEventListener("transitionend", removeTransition);
window.addEventListener("keydown", playAudio);
