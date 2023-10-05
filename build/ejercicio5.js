"use strict";
// let a = ['perro', 'gato', 'pez', 'ardilla']
// const isArrayElementDuplicated = (arrayElements: string[]): boolean => {
//     arrayElements.forEach((element, index) => {
//         console.log(element, index);
//         arrayElements.forEach((element2, index2) => {
//             console.log(element2, index2);
//             if(arrayElements[index] === ){
//                 return true
//             }
//         })
//     })
//     return false
// }
// isArrayElementDuplicated(a)
let colores = ["red", "black", "white", "yellow"];
let combSecret = [];
for (let i = 0; i < colores.length; i++) {
    let random = Math.floor(Math.random() * colores.length);
    if (colores[i] in combSecret) {
        continue;
    }
    else {
        combSecret.push(colores[random]);
    }
}
console.log(colores);
console.log(combSecret);
