/*Declara un array llamado "carreritas" con los siguientes valores: Lucía, Roberto, María, Jesús, Andrea y José (éste será el orden de sus posiciones dentro de una carrera). Deberás imprimir en consola la clasificación actual.

La carrera contínua y se van modificando esas posiciones:

    Andrea adelanta a María
    José es descalificado de la carrera.
    Detrás de Lucía y antes de Roberto se clasifican tres nuevos corredores: Cristóbal, Fernanda y Armando.
    Hay un nuevo concursante que toma el primer puesto: Federico.


Imprime en consola la clasificación final con las posiciones que se han modificado. */
var carreritas = ["Lucía", "Roberto", "María", "Jesús", "Andrea", "José"];
console.log("La clasificación actual es: " + carreritas);

// Lucía-Roberto-Andrea-María-Jesús-José
var old_pos = carreritas.indexOf("Andrea");
var new_pos = carreritas.indexOf("María");
var aux = carreritas[old_pos];
var i;
for (i = old_pos; i>= new_pos; i--){ // Estudiar
    carreritas[i] = carreritas[i - 1];
}
carreritas[new_pos] = aux;
console.log("Pero Andrea arrebasó a María: " + carreritas);

// Lucía-Roberto-Andrea-María-Jesús
bye = carreritas.pop();
console.log("Pero descalificaron a José: " + carreritas);

// Lucía-Cristóbal-Fernanda-Armando-Roberto-Andrea-María-Jesús
var num1 = carreritas.indexOf("Roberto");
var num2 = carreritas.indexOf("Andrea");
carreritas.splice(num1,0,"Cristóbal","Fernanda","Armando");
console.log("Pero se agregaron 3 corredores: " + carreritas);

// Federico- Lucía-Cristóbal-Fernanda-Armando-Roberto-Andrea-María-Jesús
carreritas.unshift("Federico");
console.log("Pero alguien acaba de arrebasar a Lucía: " + carreritas);