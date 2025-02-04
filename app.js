// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
  let elementoHtml = document.querySelector(elemento); //Acceder al elemento html
  elementoHtml.innerHTML = texto;
  return;
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("No hay amigos para sortear.");
  }
  let amigoGenerado =
    listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

  console.log(listaAmigos);
  console.log(`El nombre elegido es: ${amigoGenerado}`);

  limpiarCaja("#listaAmigos");
  // agregarNombreALaLista(amigoGenerado, "resultado", "El amigo sorteado es: ");
  resultadoAmigoSorteado(amigoGenerado, "resultado");

  return;
  //asignarTextoElemento("h2", `El nombre elegido es: ${amigoGenerado}`);
}

function resultadoAmigoSorteado(nombre, id) {
  //Selecciona la lista
  const lista = document.getElementById(id);
  lista.innerHTML = ""; // Limpiar la lista

  /// Crea un nuevo elemento <li>
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "El amigo sorteado es: " + nombre; // Establecer el texto del <li>

  // Agrega el <li> a la lista
  lista.appendChild(nuevoElemento);
  return;
}

function agregarAmigo() {
  let amigo = document.querySelector("#amigo").value;
  if (listaAmigos.includes(amigo)) {
    alert("Este nombre ya está en la lista");
    document.querySelector("#amigo").value = "";
  }
  if (amigo == "") {
    alert("Debes ingresar un nombre");
  } else {
    listaAmigos.push(amigo);
    document.querySelector("#amigo").value = "";
    asignarTextoElemento("h2", "Amigo agregado correctamente");
    agregarNombreALaLista(amigo, "listaAmigos");
    limpiarCaja(`#resultado`);
    console.log(listaAmigos);
  }

}

function agregarNombreALaLista(nombre, id) {
  // Seleccionar la lista
  const lista = document.getElementById(id);
  //lista.innerHTML = "";
  // Crea un nuevo elemento <li>
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombre;

  for (let index = 0; index < listaAmigos.length; index++) {
    lista.appendChild(nuevoElemento);
  } // Establece el texto del <li>

  return;

  // Agrega el <li> a la lista
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
