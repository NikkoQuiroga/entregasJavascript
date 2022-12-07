// const listaDePaginas = ['Google', 'Yahoo', 'Altavista'];
// const nombre = prompt('Ingresá tu nombre');

// function hola() {
//     alert(`¡Hola ${nombre}!`);
// }

// function numeros() {
//     const edad = prompt(`${nombre}, por favor, ingresá tu edad`);

//     if (parseInt(edad) < 18) {
//         alert("Sos menor de edad");
//         numeros();
//     } else {
//         alert(`Gracias por ingresar siendo mayor de edad, ${nombre}`);
//         alert(`Por ser mayor, podés mirar todos estos buscadores en la consola secreta de Chrome:`);
//         for (let i = 0; i < listaDePaginas.length; i++) {
//             console.log(listaDePeliculas[i]);
//         }
//     }
// }

// hola();
// numeros();

const numeroARecorrer = prompt('Ingresa tu numero');
const numeroARecorrer2 = prompt('Ingresa otro numero... si el resultado es divisible por 3 va a devolver japo; si es divisible por 5 va a devolver nesa, es divisible por los 2 va a devolver japonesa');
const resultado = parseInt(numeroARecorrer) + parseInt(numeroARecorrer2);

const fizz = (numero) => {
    if (isNaN(numero)) {
        alert("Error, por favor, ingresa un numero");
    }
    for (let i = 0; i <= numero; i++) {
        if (i % 3 === 0 && numero % 5 === 0) {
            alert(`${i}, "japonesa"`);
        }
        if (i % 3 === 0) {
            alert(`${i}, "japo"`);
        }
        if (i % 5 === 0) {
            alert(`${i}, "nesa"`);
        }
    }
}

fizz(resultado); //argument
