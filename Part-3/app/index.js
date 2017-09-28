// OOP (Object-oriented Programming)

// - Maps "object" to real word
// covers encapsulation, inheritance, abstraction, and more
// in es6, uses classes

// Entity Class

// Entitties have a name, and height property.
// entities greet() you with "Hi, i'm <my name>! i live in middle earth."
// class entity { name, height, greet() 

// Hobbit class

// Hobbits have a name, height, and great() property too.
// Through inheritence, Hobbit extends entity.
// class hobbit { name, height, 
    //              greet(){"Hello! i'm <My name> from the shire!"}}

// ================ Setting up an ES6 class ==============

// class Entity {
//     constructor(name, height) {
//         this.name = name,
//         this.height = height
//     }

//     greet(){
//         console.log(`Hi! i'm ${this.name}! i live in middle earth`);
//     }
// }

// let Faza = new Entity("Faza", 75);
// Faza.greet();

// Jangan lupa ini di localhost: 3000


// ===================== Inheritance in ES6 Classes =====================

import Entity from './entity';

class Hobbit extends Entity {
    constructor(name, height){
        super(name, height);
    }

    // Bisa juga dibuat function disini
    //  greet(){
    //     console.log(`Hi! i'm ${this.name}! i live in middle earth`);
    // }
}

let Frodo = new Hobbit("Frodo Baggins", 4.5);
console.log(Frodo);
Frodo.greet();