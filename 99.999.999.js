/* Ejercicio en javascript: recibe el numero 99.999.999 y lo traduce en palabras, 
obteniendo "noventa y nueve millones, novescientos noventa y nueve mil, novescientos noventa y nueve" */

// defino constante del numero
const CIFRA = "99.999.999";
// defino constante del diccionario de traduccion
const TRADUCCION = {
    "millones":"noventa y nueve millones, ",
    "miles":"novescientos noventa y nueve mil, ",
    "cientos":"novescientos noventa y nueve"
};

// creo un arreglo a partir del string, separando los números cuando aparece un punto
let rebanadas = CIFRA.split(".");

// funcion recursiva que toma cada elemento del arreglo en el primer argumento
// y accede según el valor de index que le pasemos en el segundo argumento
function conversion(subcadenas, index){
    // establezco el caso base que detiene la recursión
    if (index === subcadenas.length){
        return "";
    } 

    // para trabajar el arreglo creo una variable
    let recursionActual = "";

    // según la se cumplan las condiciones de evaluación la variable declarada anteriormente
    // toma el valor del diccionario traduccion según la expresión resulte verdadera
    if (subcadenas[index] === "99" && index === 0){
        recursionActual = TRADUCCION.millones;
    } else if (subcadenas[index] === "999" && index === 1){
        recursionActual = TRADUCCION.miles;
    } else if (subcadenas[index] === "999" && index === 2){
        recursionActual = TRADUCCION.cientos;
    }

    // coloco al inicio el primer valor que toma la variable y la concateno con la llamada recursiva
    // donde va a ir cambiando su valor y concatenandose uno a otro
    return recursionActual + conversion(subcadenas, index + 1);
}

// almaceno el llamado a la función en una variable, que será la que se imprima en consola
paraTraducir = conversion(rebanadas, 0);
console.log(paraTraducir);
