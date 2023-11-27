

const offset = 10;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonList = document.getElementById('pokemonList')

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {
        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i];
            pokemonList.innerHTML += convertPokemonToHTML(pokemon);
            
        }
    })
    .catch(function (error) { console.error(error) })
    .finally(function () { console.log('Requisição concluída!') })

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#010</span> 
            <span class="name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="types">
                    <li class="type"> Bug </li>
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png" alt="${pokemon.name}">
            </div>
    
        </li>
    `
}
