// 1)Variables y Operadores
//a)Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.

var a= 1
var b= 2
var suma = (a + b)
console.log (suma);

//b)Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var i= "joven"
var b= "feliz"
var oracion = (i + b)
console.log (oracion);

//c)Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado la suma una 3er variable (utilizar length).

var i= "joven"
var b= "feliz"
var oracion = (i.length + b.length)
console.log (oracion);

//2)Strings
//a)Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).
var word= "codificacion"
var m= word.toUpperCase ();
console.log (m);

//b)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
var name= "codificacion"
var piece= name.substring (0, 5);
console.log (piece);

//c)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).
var name= "codificacion"
var last= name.substring (9);
console.log (last);

//d)Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
var name= "codificacion"
var change= name.substring (0, 1);
var changeUp= change.toUpperCase ();
var changeLo= name.toLowerCase ().substring (1);
var all= changeUp + changeLo;
console.log (all);

//e)Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var blank= "codifi cacion"
var firstSpace = blank.indexOf(" ");
console.log (firstSpace);

//f)Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
var words= "codificacion variabilidad"
var word1= words.substring (0, words.indexOf (" "));
var word2= words.substring (words.indexOf (" ") + 1);
word1= word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase();
word2= word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();
var doit= word1 + " " + word2;
console.log (doit);

//3) Arrays
//a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)
 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.log ( months[4] , months[10]);

//b) Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log (months.sort ());

//c) Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift ("start");
months.push ("end");
console.log (months);

//d) Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift ();
months.pop ();
console.log (months);

//e)Invertir el orden del array (utilizar reverse)
months.reverse ();
console.log (months);

//f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
console.log (months.join('-'));

//g) Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).
var newmonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copy = newmonths.slice(4, 11);
console.log (copy);

//4) If Else
//a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”
var numberrandom = Math.random();
    if (numberrandom >= 0.5){
    console.log ('Greater than 0.5');
    } else {
    console.log ('Lower than 0.5');
    }

//b)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:

var age = 29;
var text = "";

    if(age < 2){
        text = 'Bebe';
    } else if (age >= 2 && age <= 12) {
         text = 'Nino';
    } else if (age >= 13 && age <= 19) {
        text = 'Adolescente';
    } else if (age >= 20 && age <= 30) {
        text = 'Joven';
    } else if(age >= 31 && age <= 60) {
        text = 'Adulto';
    } else if(age >= 61 && age <= 75){
        text = 'Adulto mayor';
    } else if(age > 75){
        text = 'Anciano';
    }
console.log (text);

//5) For
//a)Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.
var array=  ["pa", "pe" , "pi", "po", "pu" ];
for (let index = 0; index < array.length; index++) {
    alert (array [index]);
    
}

//b)Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.
var array=  ["pa", "pe" , "pi", "po", "pu" ]; 
for (let index = 0; index < array.length; index++) {
    var arraym= array[index].substring(0,1).toUpperCase() + array[index].substring(1);
    alert (arraym);

}

//c)Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.
var sentence= "";
for (let index = 0; index < array.length; index++) {
    sentence = sentence + array[index];
     
}
alert (sentence);

//d)Crear una array vacío y con un bucle for de 10 repeticiones llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for deberia haber 10 elementos dentro del array, desde el número 0 hasta al numero 9. Mostrar por la consola del navegador el al array final (utilizar console.log).
var empty = [];
  for (let index = 0; index < 10; index++) {
    empty.push(index);
  }
  console.log(empty);

//6) Funciones
//a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.
//b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.
//c)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.
//d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).
//e)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

//a) , b) y d)
var x = sum(4, 3);   

function sum(a, b) {
  if (validate_numeric (a) && validate_numeric (b)) { 
  var newa=  validate_integer_d (a);
  var newb=  validate_integer_d (b);
    return newa + newb;
    
 } else {
     return "NaN"
 }
 }
 console.log (x);
 
 function validate_integer_d (a) {
    if (Number.isInteger(a)) {
       return a;
    }
    else {
        alert ("number is not integer");
        return Math.round(a);}
               
}


 //c)
 var y = validate_integer (5);
 function validate_integer (a) {
     if (Number.isInteger(a)) {
        alert("true");
    }       
 }

//e)

function validate_numeric(a) {
        if (!isNaN(a)) {
          return true;
        } else {
          return false;
        }
      }

 
 
 




