let nombre = prompt("escriba su nombre")
let cargo = prompt("escriba su cargo que ocupa en la empresa")
let area = prompt("escriba area a la que pertenece")
let sede = prompt("escriba sede a la que pertenece")

alert(nombre + ("  ") + cargo + ("  ") + area + ("  ") + sede)
console.log(" Bienvenido " + nombre)

let lun = parseInt(prompt("escriba cuantas horas trabajo el lunes "))
let mar = parseInt(prompt("escriba cuantas horas trabajo el martes"))
let mier = parseInt(prompt("escriba cuantas horas trabajo el miercoles"))

let horas = lun + mar + mier

console.log(" De lunes a miercoles trabajaste " + horas + " horas en total ")

let promHoras = horas / 3
console.log(" un promedio de " + promHoras + " diarias ")