let saludo = "hola mundo";
console.log(saludo);

let nombres, apellidos, direccion, telefono;

nombres = "sebastian sanabria";
direccion = "carrera 18 No. 15-25";
telefono = 3105069730  //numero entero
let salario = 13000000.43 //numero decimal
var profesion = "abogado"; 

console.log(nombres)
console.log(direccion)
console.log(telefono)
console.log(profesion)

document.write(nombres);
document.write(direccion);
document.write(telefono);
document.write(profesion);

const COLOR_RED = "FFFFF"
const pi = 3.1416
let estado = true; 
let accion = false;



let horas = [1,2,3,4,5,6,7,8,9,10,11,12];
//console.log(horas);
//index++

for (let index = 0; index < horas.length; index=index+1) {
    console.log(horas[index]);
    
}

var usuario={
     nombre: 'sebastian',
     apellido: 'sanabria',
     edad:30,
     salario: 12000000  
};
console.log(usuario);
console.log("nombres: " + usuario.nombre);
console.log("salario: " + usuario.salario);