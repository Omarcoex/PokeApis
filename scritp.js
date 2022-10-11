//https://pokeapi.co/api/v2/pokemon/ditto

next = document.getElementById("btn");
next.addEventListener("click", nextPokemon);

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
async function nextPokemon() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  console.log(data);
  id++;

  const pokemon = {
    nombre: data.name,
    experiencia: data.base_experience,
    hp: data.stats[1].base_stat,
    ataque: data.stats[1].base_stat,
    defensa: data.stats[2].base_stat,
    especial: data.stats[3].base_stat,
  };
}

const pintarCard = (pokemon) => {
  const flex = document.querySelector(".flex");
  const template = document.getElementById("card").content;
  const clone = template.cloneNode(true);
  const fragment = document.createDocumentFragment();
};
