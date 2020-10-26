// 1)Variables y Operadores
//a)
var a= 1
var b= 2
var suma = (a + b)
console.log (suma);

//b)
var i= "joven"
var b= "feliz"
var oracion = (i + b)
console.log (oracion);

//c)
var i= "joven"
var b= "feliz"
var oracion = (i.length + b.length)
console.log (oracion);

//2)Strings
//a)
var word= "codificacion"
var m= word.toUpperCase ();
console.log (m);

//b)
var name= "codificacion"
var piece= name.substring (0, 5);
console.log (piece);

//c)
var name= "codificacion"
var last= name.substring (9);
console.log (last);

//d)
var name= "codificacion"
var change= name.substring (0, 1);
var changema= name.toUpperCase ();
var changemi= name.tolower (1, 12);
var all= change+changema+changemi;
console.log (all);