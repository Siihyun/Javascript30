function debounce(func, wait = 20, immediate = true) {
  let timeout;

  return function () {
    const context = this;
    const args = arguments;

    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

function classToggle(e) {
  imgs.forEach((img) => {
    const scrolledLength = window.scrollY + window.innerHeight;
    const showImg = img.offsetTop + img.offsetHeight / 2;
    const disappearImg = img.offsetTop + img.offsetHeight;

    if (scrolledLength > showImg) img.classList.add("active");
    if (window.scrollY > disappearImg) img.classList.remove("active");
  });
}

const imgs = document.querySelectorAll(".slide-in");
window.addEventListener("scroll", debounce(classToggle));
