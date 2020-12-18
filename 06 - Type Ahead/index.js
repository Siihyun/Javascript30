const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((res) => {
    console.log(res);
    return res.json(); // body text를 json으로 읽어 promise를 return
  })
  .then((data) => {
    cities.push(...data);
  });

const input = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");

findMatch = (cities, wordToMatch) => {
  const regex = new RegExp(wordToMatch, "gi");
  return cities.filter(
    (place) => place.city.match(regex) || place.state.match(regex)
  );
};

getCity = () => {
  suggestion.innerHTML = findMatch(cities, input.value)
    .map((place) => {
      const regex = new RegExp(input.value, "gi");
      const city = place.city.replace(
        regex,
        `<span class="hl">${input.value}</span>`
      );
      const state = place.state.replace(
        regex,
        `<span class="hl">${input.value}</span>`
      );
      return `<li>
      <span class="name">${city} ${state}</span>
      <span class="population">${place.population}</span>
      </li>`;
    })
    .join("");
};

input.addEventListener("change", getCity);
input.addEventListener("keyup", getCity);
