"use strict";
class Persona {
    constructor(name, age, dni) {
        this.name = name;
        this.age = age;
        this.dni = dni;
    }
}
// class Estudiante{
//     name: string
//     age: number
//     dni: string
//     course: string
//     constructor(name: string, age: number, dni: string, course: string){
//         this.name = name
//         this.age = age
//         this.dni = dni
//         this.course = course
//     }
// }
class Estudiante extends Persona {
    constructor(name, age, dni, course) {
        super(name, age, dni);
        this.course = course;
    }
}
const estudiante = new Estudiante("Alex", 12, "12345678Z", "Full Stack");
console.log(estudiante.name);
console.log(estudiante.age);
console.log(estudiante.dni);
console.log(estudiante.course);
