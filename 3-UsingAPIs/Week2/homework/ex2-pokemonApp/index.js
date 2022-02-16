'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/blob/main/3-UsingAPIs/Week2/README.md#exercise-2-gotta-catch-em-all

Complete the four functions provided in the starter `index.js` file:

`fetchData`: In the `fetchData` function, make use of `fetch` and its Promise 
  syntax in order to get the data from the public API. Errors (HTTP or network 
  errors) should be logged to the console.

`fetchAndPopulatePokemons`: Use `fetchData()` to load the pokemon data from the 
  public API and populate the `<select>` element in the DOM.
  
`fetchImage`: Use `fetchData()` to fetch the selected image and update the 
  `<img>` element in the DOM.

`main`: The `main` function orchestrates the other functions. The `main` 
  function should be executed when the window has finished loading.

Use async/await and try/catch to handle promises.

Try and avoid using global variables. As much as possible, try and use function 
parameters and return values to pass data back and forth.
------------------------------------------------------------------------------*/
async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('HTTP or network error or wrong server status');
  }

  return response.json();
}

function createDOMElements() {
  const container = document.createElement('div');
  const buttonEl = document.createElement('button');
  const selectEl = document.createElement('select');
  const gridEl = document.createElement('div');

  container.id = 'container';
  selectEl.id = 'pokemon-list';
  gridEl.id = 'pokemon-grid';

  buttonEl.type = 'button';
  buttonEl.textContent = 'Get Pokemon!';
  buttonEl.addEventListener('click', fetchImage);

  document.body.appendChild(container);
  container.appendChild(selectEl);
  container.appendChild(buttonEl);
  container.appendChild(gridEl);
}

function fetchAndPopulatePokemons(pokemons) {
  const selectEl = document.getElementById('pokemon-list');

  for (const pokemon of pokemons.results) {
    const optionEl = document.createElement('option');
    optionEl.value = pokemon.name;
    optionEl.textContent = pokemon.name;
    selectEl.append(optionEl);
  }
}

async function fetchImage() {
  try {
    const selectedPokemon = document.getElementById('pokemon-list').value;
    const urlPokemonAPI = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    const urlPokemonJSON = await fetchData(urlPokemonAPI);
    const urlPokemon = urlPokemonJSON.sprites.front_default;
    renderImage(urlPokemon, selectedPokemon);
  } catch (error) {
    console.log(error);
  }
}

function renderImage(url, name) {
  const gridEl = document.getElementById('pokemon-grid');

  const wrapperEl = document.createElement('div');
  wrapperEl.id = 'image-wrapper';

  const imgEl = document.createElement('img');
  imgEl.alt = name;
  imgEl.src = url;

  wrapperEl.appendChild(imgEl);
  gridEl.appendChild(wrapperEl);
}

function errorHandler() {
  const errContainer = document.createElement('div');

  errContainer.classList.add('container');
  errContainer.textContent = 'Sorry, something went wrong.';

  document.body.appendChild(errContainer);
}

async function main() {
  try {
    const pokemons = await fetchData('https://pokeapi.co/api/v2/pokemon');
    createDOMElements();
    fetchAndPopulatePokemons(pokemons);
  } catch (error) {
    console.log(error);
    errorHandler();
  }
}

window.addEventListener('load', main);
