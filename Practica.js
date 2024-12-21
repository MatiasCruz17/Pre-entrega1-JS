/*Estructura HTML del proyecto. 
Variables de JS necesarias. 
Funciones esenciales del proceso a simular.
Objetos de JS.
Arrays.
Métodos de búsqueda y filtrado sobre el Array.*/


const identidad = {
    nombre : prompt("Ingrese su nombre"),
    apellido : prompt("Ingrese su apellido"),
    edad : prompt("Ingrese su edad"),
    dni : prompt("Ingrese su DNI"),
    Cursos : JavaScript, php, python, MySql,
    /*Algo estoy haciendo mal*/
    Seleccion : function (JavaScript) {
        return "Este es el Curso de JavaScript"
    }
}
alert("Inscribete " + identidad);