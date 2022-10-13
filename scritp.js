const contenedor = document.querySelector("#container");
const boton = document.querySelector("#btn");
const detalleCard = document.querySelector(".detalle-card");

// const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

// let id = 1;
// async function nextPokemon() {
//   const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
//   const data = await res.json();
//   console.log(data);
//   id++;
// }

const getPokemon = async () => {
  try {
    const input = document.querySelector(".buscar").value;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    const data = await res.json();
    console.log(data);
    console.log("escuchando");
    crearPokemon(data);
    if (!res.ok) {
      alert("No esta en la BD de pokemon");
    }
    const encontrado = await res.json();
    return encontrado;
  } catch (error) {
    console.log("Error: " + error.message);
  } finally {
    console.log("done!!!");
  }
};
// getPokemon();
function listaPokemos(number) {
  for (let i = 0; i < number; i++) {
    listaPokemos(i);
  }
}
function crearPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("card-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = `${pokemon.id.toString().padStart(3, 0)}`;

  const nombre = document.createElement("h2");
  nombre.classList.add("nombre");
  nombre.textContent = pokemon.name.toUpperCase();

  const habilidad = document.createElement("h2");
  habilidad.classList.add("habilidad");
  habilidad.innerHTML = `${pokemon.abilities[0].ability.name}`;

  const hp = document.createElement("h2");
  hp.classList.add("hp");
  hp.innerHTML = `${pokemon.stats[0].stat.name}`;

  const tipo = document.createElement("p");
  tipo.classList.add("tipo");
  tipo.textContent = `${pokemon.stats[0].base_stat}`;
  // Recorres con ciclo para las propiedades
  // let tabla = `<table class = "table"> <tr><td> ${name}</td></tr>`;
  // for (let i = 0; i < stats.length; i++) {
  //   tabla += "<tr>";
  //   tabla += `${stats[i].types[0].type.name}`;
  //   tabla += `${stats[i].types[0].base_stat}`;
  //   tabla += "</tr>";
  // }
  // tabla += "</table>";
  // detalleCard.append(tabla);

  // agregamos al DOM elements
  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(nombre);
  card.appendChild(habilidad);
  card.appendChild(hp);
  card.appendChild(tipo);

  detalleCard.appendChild(card);
}

next = document.getElementById("btn");
next.addEventListener("click", getPokemon);
console.log("Recibo su click");
// listar pokemones en el card
listaPokemos(9);
