/*Una juguetería tiene mucho éxito en dos productos: payasos y muñecas. Suele hacer venta por correo y la empresa de logística les cobra por paquete, así que deben calcular el peso de los paquetes que se enviarán. Cada payaso pesa 112 grs. y cada muñeca 75 grs.

Escribe un programa que lea el número de payasos y muñecas vendidos y calcula el peso total del pedido que será enviado, considerando que el peso máximo del paquete es de 1 Kg.
Muestra en alertas el peso total por cada artículo.
Muestra en alertas cuantos paquetes se enviarán */

const pesoPayaso = 112;
const pesoMuneca = 75;

var numPayasos = prompt("Ingresa la cantidad de payasos");
var numMunecas = prompt("Ingresa la cantidad de muñecas");
var totPesoMunecas = pesoMuneca * numMunecas;
var totPesoPayasos = pesoPayaso * numPayasos;
var peso = totPesoMunecas + totPesoPayasos;
var paquetes = Math.ceil(peso/1000);

console.log(peso);

alert("Peso total de las muñecas: " + totPesoMunecas + "\nPeso total de los payasos: " + totPesoPayasos + "\nPeso total: " + peso + "\nNúmero de paquetes: " + paquetes);