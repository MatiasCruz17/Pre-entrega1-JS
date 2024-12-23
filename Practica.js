//Practica funciones de Orden superior

function asignarOperacion(op) {
    if (op == "sumar"){
        return (a, b) => a + b
    } else if (op == "restar"){
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")
let resta = asignarOperacion("restar")

console.log (suma(4, 6))
console.log (resta(5, 3))
