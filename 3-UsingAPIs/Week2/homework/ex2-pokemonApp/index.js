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
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('HTTP or network error or wrong server status');
    }
    return response.json();
  } catch (error) {
    console.log(error);
    showErrorMessage('Sorry, something went terribly wrong');
  }
}

function createDOMElements() {
  const containerEl = document.createElement('div');
  const buttonEl = document.createElement('button');
  const selectEl = document.createElement('select');
  const defaultOptionEl = document.createElement('option');
  const errContainer = document.createElement('div');

  errContainer.id = 'error-container';

  containerEl.id = 'container';
  selectEl.id = 'pokemon-list';

  defaultOptionEl.value = '';
  defaultOptionEl.textContent = 'Select a pokemon';
  defaultOptionEl.selected = true;
  defaultOptionEl.disabled = true;

  buttonEl.type = 'button';
  buttonEl.textContent = 'Get Pokemon list';

  selectEl.appendChild(defaultOptionEl);
  containerEl.appendChild(buttonEl);
  containerEl.appendChild(selectEl);
  containerEl.appendChild(errContainer);
  document.body.appendChild(containerEl);

  buttonEl.addEventListener('click', () => {
    hideErrorMessage();
    fetchAndPopulatePokemons();
  });
}

async function fetchAndPopulatePokemons() {
  const selectEl = document.getElementById('pokemon-list');

  if (selectEl.length === 1) {
    const pokemons = await fetchData('https://pokeapi.co/api/v2/pokemon');

    for (const pokemon of pokemons.results) {
      const optionEl = document.createElement('option');
      optionEl.value = pokemon.name;
      optionEl.textContent = pokemon.name;
      selectEl.appendChild(optionEl);
    }

    selectEl.addEventListener('change', (event) => {
      hideErrorMessage();
      fetchImage(event);
    });
  } else {
    showErrorMessage('Pockemon list is already populated!');
  }
}

async function fetchImage(event) {
  try {
    const selectedPokemon = event.target.value;
    const urlPokemonAPI = `https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`;
    const urlPokemonJSON = await fetchData(urlPokemonAPI);
    const urlPokemon = urlPokemonJSON.sprites.front_default;
    renderImage(urlPokemon, selectedPokemon);
  } catch (error) {
    console.log(error);
    showErrorMessage('An error happened. Please try again later');
  }
}

function renderImage(url, name) {
  const containerEl = document.getElementById('container');
  let wrapperEl = document.getElementById('image-wrapper');
  let imgEl = document.getElementById('image');

  if (!wrapperEl) {
    wrapperEl = document.createElement('div');
    wrapperEl.id = 'image-wrapper';

    imgEl = document.createElement('img');
    imgEl.id = 'image';

    wrapperEl.appendChild(imgEl);
    containerEl.appendChild(wrapperEl);
  }

  imgEl.alt = name;
  imgEl.src = url;
}

function hideErrorMessage() {
  const errContainer = document.getElementById('error-container');
  errContainer.textContent = '';
}

function showErrorMessage(errText) {
  const errContainer = document.getElementById('error-container');
  errContainer.textContent = errText;
}

function main() {
  createDOMElements();
}

window.addEventListener('load', main);
