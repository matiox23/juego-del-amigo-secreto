// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigosSorteados = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento); //Acceder al elemento html
  elementoHtml.innerHTML = texto;
}

function sortearAmigo() {
  if (listaAmigosSorteados.length === 0) {
    alert("No hay amigos para sortear.");
    return;
  }
  let amigoGenerado =
    listaAmigosSorteados[
      Math.floor(Math.random() * listaAmigosSorteados.length)
    ];

  console.log(listaAmigosSorteados);
  console.log(`El nombre elegido es: ${amigoGenerado}`);

  limpiarCaja("#listaAmigos");
  agregarNombreALaLista(amigoGenerado, "resultado", "El amigo sorteado es: ");
  return;
  //asignarTextoElemento("h2", `El nombre elegido es: ${amigoGenerado}`);
}

// function resultadoAmigoSorteado(nombre, id) {
//   // Seleccionar la lista
//   const lista = document.getElementById(id);

//   // Crear un nuevo elemento <li>
//   const nuevoElemento = document.createElement("li");
//   nuevoElemento.textContent = "El amigo sorteado es: " + nombre; // Establecer el texto del <li>

//   // Agregar el <li> a la lista
//   lista.appendChild(nuevoElemento);
// }

function agregarAmigo() {
  let amigo = document.querySelector("#amigo").value;
  if (listaAmigosSorteados.includes(amigo)) {
    alert("Este nombre ya está en la lista");
    return;
  }
  if (amigo == "") {
    alert("Debes ingresar un nombre");
  } else {
    listaAmigosSorteados.push(amigo);
    asignarTextoElemento("h2", "Amigo agregado correctamente");
    agregarNombreALaLista(amigo, "listaAmigos");
    limpiarCaja(`#amigo`);
    console.log(listaAmigosSorteados);
  }
}

function agregarNombreALaLista(nombre, id, mensaje = "") {
  // Seleccionar la lista
  const lista = document.getElementById(id);
  // Crear un nuevo elemento <li>
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = mensaje + nombre;

  for (let index = 0; index < listaAmigosSorteados.length; index++) {
    lista.appendChild(nuevoElemento);
  } // Establecer el texto del <li>

  // Agregar el <li> a la lista
}

function limpiarCaja(id) {
  const elemento = document.querySelector(id);

  if (!elemento) return; // Evita errores si el selector no existe

  if (elemento.tagName === "INPUT") {
    // Si es un input o un textarea, limpiamos su valor
    elemento.value = "";
  } else {
    // Si es otro elemento (como <ul> o <div>), limpiamos su contenido
    elemento.innerHTML = "";
  }
}
