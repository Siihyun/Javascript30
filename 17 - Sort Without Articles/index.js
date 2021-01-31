const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const ul = document.querySelector("#bands");

const sortFunction = (a, b) => {
  const exceptWords = ["A", "An", "The"];
  const firstWordinA = a.split(" ")[0];
  const firstWordinB = b.split(" ")[0];

  if (exceptWords.includes(firstWordinA)) {
    a = a.slice(firstWordinA.length + 1);
  }
  if (exceptWords.includes(firstWordinB)) {
    b = b.slice(firstWordinB.length + 1);
  }
  return a > b ? 1 : -1;
};

const sortedArray = bands.sort(sortFunction);
ul.innerHTML = sortedArray.map((band) => `<li>${band}</li>`).join("");
