/* calculadora de grados centrigrados a Farenheit y a grados kelvin  */

var grados = 0;
var resultado;
var resultado2;




function convertir( valor ){

    grados = number(prompt("ingresa un numero para los grados celsius"));   
 resultado = (valor * (9/5))+ 32; // para convertir a fahrenheit
 resultado2 = valor + 273.15; // para convertir a Kelvin

 alert("el resultado  es: " + resultado + " grados  fahrenheit");
 alert("el resultado es: " + resultado2 + " grados kelvin");

}

convertir(grados);