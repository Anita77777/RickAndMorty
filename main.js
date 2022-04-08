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

fetchRam(url);

function convertOurDataToHTML(profiles) {
  const unorderedList = document.createElement("ul");
  document.body.append(unorderedList);

  profiles.forEach((character) => {
    const listElement = document.createElement("li");
    listElement.textContent = character.name;
    unorderedList.append(listElement);
  });
}

document.querySelector("#app").innerHTML = `
  <h1>Hello Vite!</h1>
  
`;
