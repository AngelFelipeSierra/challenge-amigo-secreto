//VARIABLES NECESARIAS PARA EL DESARROLLO DEL EJERCICIO
let amigo = '';


// CREAMOS EL ARRAY DONDE ALMACENAREMOS LOS NOMBRES INGRESADOS POR EL USUARIO  
let amigos = [];

// CREAMOS UNA FUNCION PARA IMPIAR EL INPUT 
function limpiar() {
    document.querySelector('#amigo').value = '';
}

// CREAMOS UNA FUNCION QUE NOS PERMITA INGRESAR A NUESTRO ARRAY LOS AMIGOS INGRESADOS POR EL USUARIO

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor, inserte un nombre.');
    }else{  
        amigos.push(amigo);
        limpiar();
        visualizarAmigos();
        console.log(amigos);
    }
}

// 
function visualizarAmigos (){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i <= amigos.length; i++){
        let nombreAmigo = amigos[i]; 
        let newList = document.createElement('li'); //Vamos a usar el metodo createElement() para crear elementos html desde js
        newList.textContent = nombreAmigo; // Usamos textContent para agregar contenido al elemento html tipDeChatGpt: cuando es contenido que proviene de un usuario para evitar inyecciones 
        lista.appendChild(newList); //Añadimos el elemento html a la lista 

    }

}