// constante para link de la api de la base de datos
const API_Url = `https://pokeapi.co/api/v2/pokemon/`;

// Llamamos desde el dom
const pokemon = document.getElementById("pokemonName");
const appNode = document.getElementById("app");
const buscar = document.getElementById("btn");
const eliminar = document.getElementById("clear");

// Ponemos a escuchar el evento
buscar.addEventListener("click", insertPokemon);
buscar.addEventListener("touchstart", insertPokemon); //El touchstartevento se activa cuando se colocan uno o más puntos de contacto en la superficie táctil.

eliminar.addEventListener("click", deletePokemons);
eliminar.addEventListener("touchstart", deletePokemons);

async function insertPokemon() {
  try {
    const res = await fetch(`${API_Url}${pokemon.value.toLocaleLowerCase()}`);
    const data = await res.json();

    const allItems = [];
    const result = []; //*Guardaremos la respuesta en el array

    for (let pokemonInfo in data) {
      //*Convertimos el objeto JSON a array
      result.push([pokemonInfo, data[pokemonInfo]]);
    }

    console.table(result); //! mostrar tabla con la lista Pokemos

    //* Información de en frente

    //*Crear imagen
    const pokemonImage = document.createElement("img");
    pokemonImage.src = result[14][1].front_default; //*Image of pokemon

    //*Nombre de pokemon e ID
    const pokemonName = document.createElement("h2");
    pokemonName.innerText = `Name: ${result[10][1]} - ID: ${result[6][1]}`; //* Name of pokemon with ID

    //*Tipo de pokemon
    const pokemonType = document.createElement("h2");
    pokemonType.innerText = `Type: ${result[16][1][0].type.name}`; //*Type of pokemon

    //* Pokemon HP
    const hp = document.createElement("p");
    hp.innerText = `HP: ${result[15][1][0].base_stat}`; //*HP of pokemon
    hp.classList.add("pokemonStats");

    //* Attack power
    const attack = document.createElement("p");
    attack.innerText = `Attack: ${result[15][1][1].base_stat}`; //* Attack power of pokemon
    attack.classList.add("pokemonStats");

    //* Defense
    const defense = document.createElement("p");
    defense.innerText = `Defense: ${result[15][1][2].base_stat}`; //* Pokemon defense
    defense.classList.add("pokemonStats");

    //* Attack
    const specialAttack = document.createElement("p");
    specialAttack.innerText = `Special Attack: ${result[15][1][3].base_stat}`; //* Pokemon special attack
    specialAttack.classList.add("pokemonStats");

    //*  Defense
    const specialDefense = document.createElement("p");
    specialDefense.innerText = `Special Defense: ${result[15][1][4].base_stat}`; //* Pokemon special defense
    specialDefense.classList.add("pokemonStats");

    //* Speed
    const speed = document.createElement("p");
    speed.innerText = `Speed: ${result[15][1][5].base_stat}`; //* Pokemon special attack
    speed.classList.add("pokemonStats");

    //* Contenerdor de stats
    const stats = document.createElement("div");
    stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
    stats.classList.add("pokemonStatsContainer");

    //*Crear contenedor
    const container = document.createElement("div");
    container.append(pokemonImage, pokemonName, pokemonType, stats);
    container.classList.add("container");

    allItems.push(container);

    appNode.append(...allItems); //Spread operation
  } catch (error) {
    console.log("Error en la consulta" + error.message);
  } finally {
    console.log("Done!!!");
  }
}
// Crear function para elimnar
function deletePokemons() {
  let allPokemon = appNode.childNodes;
  allPokemon = Array.from(allPokemon);

  allPokemon.forEach((pokemon) => {
    pokemon.remove(pokemon);
  });
}
