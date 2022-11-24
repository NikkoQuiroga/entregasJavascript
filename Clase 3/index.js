const listaDePeliculas = ['Xvideos', 'PornHub', 'Poringa'];
const nombre = prompt('Ingresá tu nombre');

function hola() {
    alert(`¡Hola ${nombre}!`);
}

function numeros() {
    const edad = prompt(`${nombre}, por favor, ingresá tu edad`);
    
    if (parseInt(edad) < 18) {
        alert("Sos menor de edad");
        numeros();
    } else {
        alert(`Gracias por ingresar siendo mayor de edad, ${nombre}`);
        alert(`Por ser mayor, podés mirar todos estos sitios para adultos en la consola secreta de Chrome:`);
        for (let i = 0; i < listaDePeliculas.length; i++) {
            console.log(listaDePeliculas[i]);
        }
    }
}

hola();
numeros();
