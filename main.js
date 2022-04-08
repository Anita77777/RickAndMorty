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
}

document.querySelector("#app").innerHTML = `
<h1>Rick and Morty Profiles</h1>
<form>
  <fieldset>
    <input type="radio" name="ram-filter" value="alive" checked>
    <label>Alive</label>
    <input type="radio" name="ram-filter" value="dead">
    <label>Dead</label>
    <input type="radio" name="ram-filter" value="unknown">
    <label>Unknown</label>
  </fieldset>
</form>
<button class="button" data-js="button__random">Random</button>

`;

const buttonR = document.querySelector('[data-js="button__random"]');
buttonR.addEventListener("click", () => {
  fetchRam(url);
});
