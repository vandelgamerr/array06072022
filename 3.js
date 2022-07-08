// De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra 
// el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor 
// elemento de un arreglo.

var arregloNumeros = [10,40,30,20,15,5];


//*** Ordenado Ascendente */

arregloNumeros.sort(function compareFunction(first, second){
    if(first > second) return 1;  // 1 is greater than 0, so .sort will put first before second.
    if(first < second) return -1;  // -1 is less than 0, so .sort will put first after second.
    return 0
})
console.log(arregloNumeros);
//console.log(arregloNumeros.sort());

//*** Valor minimo */
var minimo = Math.min.apply(null,arregloNumeros);
console.log(minimo);

//*** Valor maximo */
var maximo = Math.max.apply(null,arregloNumeros);
console.log(maximo);

