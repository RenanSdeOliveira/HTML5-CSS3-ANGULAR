

const offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonList = document.getElementById('pokemonList')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHTML = pokemons.map(convertPokemonToHTML).join('')
    pokemonList.innerHTML = newHTML

})

function convertPokemonTypeToHTML(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type"> ${typeSlot.type.name} </li>`)
}

function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon">
            <span class="number">#${pokemon.id}</span> 
            <span class="name">${pokemon.name}</span> 
            <div class="detail">
                <ol class="types">
                    ${convertPokemonTypeToHTML(pokemon.types).join(' ')}
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png" alt="${pokemon.name}">
            </div>
    
        </li>
    `
}
