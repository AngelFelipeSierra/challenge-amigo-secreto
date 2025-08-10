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
        console.log(amigos);
    }
}