// El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, 
// (el usuario ingresa: “1,2,3,4,5” y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

//var cadena = '1,2,3,4,5';

cadena = prompt('Por favor ingrese cadena separada por comas (,)').toUpperCase();



var arregloSplit = cadena.split(','); 
//dividir la cadena de texto por una coma
console.log(arregloSplit);
