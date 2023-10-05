class Persona{
    name: string
    age: number
    dni: string

    constructor(name: string, age: number, dni: string){
        this.name = name
        this.age = age
        this.dni = dni
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

class Estudiante extends Persona{
    course: string

    constructor(name: string, age: number, dni: string, course: string){
        super(name, age, dni)
        this.course = course
    }
}

const estudiante = new Estudiante("Alex", 12, "12345678Z", "Full Stack")

console.log(estudiante.name);
console.log(estudiante.age);
console.log(estudiante.dni);
console.log(estudiante.course);
