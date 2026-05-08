//antes de iniciar instalamos Node descargando el instalador desde el sitio oficial
//instalamos una extension en vscode llamada code runner (.run)
//Variables

//definimos una constante que represente la nota de aprobacion minima
//para constantes iniciamos co palabra reservada const, terminamos cada linea con ;
const notaAprobacion = 4.0;

//Arreglo de objetos (Lista de alumnos)
let alumnos = [
    {nombre: "Ana", nota: 5.5},
    {nombre: "Pedro", nota: 3.8},
    {nombre: "Luis", nota: 4.2}
];

// alumnos.forEach(e => {
//     console.log("nombre: " + e.nombre)
// });

// recorremos el arreglo completo
for(let i=0; i < alumnos.length; i++){

    // Guardamos el alumno actual en una variable temporal
    let alumno = alumnos[i];

    if(alumno.nota >= notaAprobacion){
        console.log(alumno.nombre + " está aprobado con nota " + alumno.nota);
    }else{
        console.log(alumno.nombre + " está reprobado con nota " + alumno.nota);
    }

}
