
var carreritas = ['Lucia', 'Roberto', 'María', 'Jesús', 'Andrea', 'José'];


console.log(carreritas);


//Eliminar a Andrea.
var participante1 = carreritas.splice(4, 1);

console.log(carreritas);

//Agregar un elemento despues de Robero.
carreritas.splice(2,0,'Andrea');


//José es descalificado
carreritas.pop();

console.log(carreritas);

//Agregar Cristóbal, Fernanda y Armando
carreritas.splice(2,0, 'Cristóbal', 'Fernanda', 'Armando');

console.log(carreritas);

//Agregar nuevo consursante que toma el primer puesto: Federico

carreritas.splice(0,0, 'Federico');

console.log(carreritas);

