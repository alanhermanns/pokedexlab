const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

export async function goGetPokemonGo() {
    const response = await fetch(URL);
    const pokeJson = await response.json();
    return pokeJson;
}