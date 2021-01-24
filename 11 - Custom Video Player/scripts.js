const video = document.querySelector(".player__video");
const playButton = document.querySelector(".player__button");
const skipButtons = document.querySelectorAll("[data-skip]");
const ranges = document.querySelectorAll(".player__slider");
const progress = document.querySelector(".progress");
const progressBar = document.querySelector(".progress__filled");

const videoPlay = () => {
  if (playButton.classList.contains("playing")) {
    video.pause();
    playButton.innerHTML = "►";
  } else {
    video.play();
    playButton.innerHTML = "❚❚";
  }
  playButton.classList.toggle("playing");
};

const videoSkip = (e) => {
  video.currentTime += parseFloat(e.target.dataset.skip);
};

const handleRangeUpdate = (e) => {
  video[e.target.name] = e.target.value;
};

const handleProgressBar = () => {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
};

const scrub = (e) => {
  console.log(progress.offsetWidth);
  const time = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = time;
};

playButton.addEventListener("click", videoPlay);

video.addEventListener("timeupdate", handleProgressBar);

skipButtons.forEach((button) => {
  button.addEventListener("click", videoSkip);
});

ranges.forEach((slider) => {
  slider.addEventListener("change", handleRangeUpdate);
});

ranges.forEach((slider) => {
  slider.addEventListener("mousemove", handleRangeUpdate);
});

progress.addEventListener("click", scrub);
