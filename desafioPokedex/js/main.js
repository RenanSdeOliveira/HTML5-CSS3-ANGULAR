
const maxRecords = 151
let offset = 0
const limit = 20
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

pokeApi.getPokemons().then((pokemons = []) => {
    const newHTML = pokemons.map(convertPokemonToHTML).join('')
    pokemonList.innerHTML = newHTML

})


function convertPokemonToHTML(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span> 
            <span class="name">${((pokemon.name).charAt(0).toUpperCase()+(pokemon.name).slice(1))}</span> 
            <div class="detail">
                <ol class="types">
                ${pokemon.types.map((type) => `<li class="type ${type}">${((type).charAt(0).toUpperCase()+(type).slice(1))}</li>`).join('')}
                </ol>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.number}.png" alt="${pokemon.name}">
            </div>
    
        </li>
    `
}





loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit
    
    loadPokemonItens(offset, limit)

    function loadPokemonItens(offset, limit) {
        pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
            const newHtml = pokemons.map(convertPokemonToHTML).join('')
            pokemonList.innerHTML += newHtml
        })
    }

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

