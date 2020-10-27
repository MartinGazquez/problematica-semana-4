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
var changeUp= change.toUpperCase ();
var changeLo= name.toLowerCase ().substring (1);
var all= changeUp + changeLo;
console.log (all);

//e)
var blank= "codifi cacion"
var firstSpace = blank.indexOf(" ");
console.log (firstSpace);

//f)
var words= "codificacion variabilidad"
var word1= words.substring (0, words.indexOf (" "));
var word2= words.substring (words.indexOf (" ") + 1);
word1= word1.substring(0, 1).toUpperCase() + word1.substring(1).toLowerCase();
word2= word2.substring(0, 1).toUpperCase() + word2.substring(1).toLowerCase();
var doit= word1 + " " + word2;
console.log (doit);

//3) Arrays
//a)
 var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
 console.log ( months[4] , months[10]);

//b)
console.log (months.sort ());

//c) 
months.unshift ("start");
months.push ("end");
console.log (months);

//d)
months.shift ();
months.pop ();
console.log (months);

//e)
months.reverse ();
console.log (months);

//f)
console.log (months.join('-'));

//g
var newmonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
var copy = newmonths.slice(4, 11);
console.log (copy);

//4) If Else
//a)
var numberrandom = Math.random();
    if (numberrandom >= 0.5){
    console.log ('Greater than 0.5');
    } else {
    console.log ('Lower than 0.5');
    }

//b)
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
    




