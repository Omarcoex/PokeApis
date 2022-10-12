
const boton = document.querySelector("#btn");
const detalleCard = document.querySelector(".detalle-card");

boton.addEventListener("click", (e) => {
  e.preventDefault()
  cargarData();
  console.log("escuchando");
});

const URL = "https://pokeapi.co/api/v2/pokemon/ditto";

// fetch(URL)
//   .then(response => {
//     if (response.status == 404) {
//       document.body.textContent = "no encontrado";
//     } else {
//       return response.json();
//     }
//   })

//   .then(data => {
//     document.body.innerHTML = `<img src='${data.sprites.front_default}'>`;
//     console.log(data);
//   });

// Asin await

let id = 1;
async function cargarData() {
  const input = document.querySelector(".buscar").value;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
  const data = await res.json();
  console.log(data);
  dibujarPokemon(data)
  id++;
}

// Creamos los pokemones en html
function dibujarPokemon(pokemon) {
  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  
  const h2 = document.createElement("h2");
  h2.textContent = pokemon.name.toUpperCase();

// data.forEach((pokemon,index)=>{
//   const listItem = document.createElement('li');
//   const hp= document.createTextNode(`${pokemon.stats[0].name}`)
//   listItem.appendChild(hp)
// })

// const habilidad =document.createElement('li')
// li.textContent=pokemon.abilities[0].ability.name
   



  // Agregamos datos al dom desde javascritp
  const div = document.createElement("div");
  div.appendChild(img);
  div.appendChild(h2);
  // div.appendChild(li)

  detalleCard.appendChild(div);
}
