import "./style.css";

const url = "https://rickandmortyapi.com/api/character";

async function fetchRam(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    convertOurDataToHTML(data.results);
  } catch (error) {
    console.error(`Upps das war ein Fehler: ${error}`);
  }
}

function convertOurDataToHTML(profiles) {
  const unorderedList = document.createElement("ul");
  document.body.append(unorderedList);

  profiles.forEach((character) => {
    const listElement = document.createElement("li");
    listElement.textContent = character.name;
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", character.image);
    listElement.append(imgElement);
    unorderedList.append(listElement);
  });

  const ramform = document.querySelector("[data-js='ramform']");
  let currentFilter = 'all';

  ramform.addEventListener("change", () => {
    // Überschreibt den Value der ausgewählten Box in currentFilter
    currentFilter = ramform.elements["ram-filter"].value;
    filterCharacter();
  })

  function filterCharacter() {
    const divResults = document.querySelector("[data-js='filterResult']");
    divResults.innerHTML = ``;
    const unorderedList = document.createElement("ul");
    data.results
      .filter(character => character.status.includes(currentFilter) || currentFilter === 'all')
      .forEach(character => {
        const listElement = document.createElement("li");
        listElement.textContent = character.name;
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", character.image);
        listElement.append(imgElement);
        unorderedList.append(listElement);
        divResults.append(unorderedList);
      })
  }
}

document.querySelector("#app").innerHTML = `
<h1>Rick and Morty Profiles</h1>
<form data-js="ramform">
  <fieldset>
    <input type="radio" name="ram-filter" value="all" checked>
    <label>All</label>
    <input type="radio" name="ram-filter" value="alive">
    <label>Alive</label>
    <input type="radio" name="ram-filter" value="dead">
    <label>Dead</label>
    <input type="radio" name="ram-filter" value="unknown">
    <label>Unknown</label>
  </fieldset>
</form>
<button class="button" data-js="button__random">Random</button>
<div data-js="filterResult"></div>
`;

const buttonR = document.querySelector('[data-js="button__random"]');
buttonR.addEventListener("click", () => {
  fetchRam(url);
});







  
