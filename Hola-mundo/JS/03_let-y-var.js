'use strict'


// Pruebas con let y var


// PRUEBA VAR --> actua a nivel global, si cambias valor en algun punto del código se cambia el valor global y vas arrastrando ese nuevo valor.

var numero = 40;
console.log(numero);

if(true){
    var numero = 50;
    console.log(numero);
}

console.log(numero);


// PRUEBA LET --> actua solo en el bloque donde está definido, en esto caso dentro del if pero si haces un console.log fuera de la esctrura del if, el valor sigue siendo el inicial. Actua a nivel de bloque.

var texto = "Curso JS"
console.log (texto)

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto)
}

console.log(texto)

