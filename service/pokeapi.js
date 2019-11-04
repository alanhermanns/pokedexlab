let URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex/';

export async function goGetPokemonGo() {
    let queryString = window.location.hash.slice(1);
    URL = URL + `${queryString}`;
    const response = await fetch(URL);
    const pokeJson = await response.json();
    return pokeJson;
}