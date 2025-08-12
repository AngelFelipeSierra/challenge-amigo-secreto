let amigo = ''; //VARIABLES NECESARIAS PARA EL DESARROLLO DEL EJERCICIO
let amigos = []; // CREAMOS EL ARRAY DONDE ALMACENAREMOS LOS NOMBRES INGRESADOS POR EL USUARIO

// CREAMOS UNA FUNCION PARA IMPIAR EL INPUT 
function limpiar() {
    document.querySelector('#amigo').value = '';
}

// CREAMOS UNA FUNCION QUE NOS PERMITA INGRESAR A NUESTRO ARRAY LOS AMIGOS INGRESADOS POR EL USUARIO

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre.');
    } else {
        amigos.push(amigo);
        limpiar();
        visualizarAmigos();
    }
}

// Creamos esta funcion para crear elementos li de manera dinamica con js el fin de agregarlos a nuestro a nuestra lista en html y visualizar los amigos agregados por el usuario
function visualizarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i <= amigos.length; i++) {
        let nombreAmigo = amigos[i];
        let newList = document.createElement('li'); //Vamos a usar el metodo createElement() para crear elementos html desde js
        newList.textContent = nombreAmigo; // Usamos textContent para agregar contenido al elemento html tipDeChatGpt: cuando es contenido que proviene de un usuario para evitar inyecciones 
        lista.appendChild(newList); //Añadimos el elemento html a la lista 

    }

}

/* Creamos esta funcion para obtener un numero pseudoaleatorio que usaremos como indice para elegir el amigo secreto
Y lo mostraremos como unico elemento de nuestra lista.*/
function sortearAmigo() {
    // Limpiamos la lista, para postriormente mostrar solo el amigo secreto elegido de manera pseudoaleatoria
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    //Validaos si el el array "amigos" esta vacio.
    if (amigos.length == 0) {
        alert('Por favor, inserte un nombre, para realizar el sorteo');
    } else {
        let indiceAmigoSecreto = Math.floor(Math.random() * amigos.length);//Creamos un numero pseudoaleatorio dentro del rango de la cantidad de amigos ingresados en el array
        let amigoSecreto = amigos[indiceAmigoSecreto]
        let liAmigoSecreto = document.createElement('li');
        liAmigoSecreto.innerHTML = `El amigo secreto sorteado es: ${amigoSecreto}`;
        liAmigoSecreto.style.color = 'green'; //Podemos acceder a las propiedades css de un elemento html y modificar sus valores de manera dinamica con js 
        lista.appendChild(liAmigoSecreto);
    }
}

