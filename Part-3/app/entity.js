class Entity {
    constructor(name, height) {
        this.name = name,
        this.height = height
    }

    greet(){
        console.log(`Hi! i'm ${this.name}! i live in middle earth`);
    }
}

export default Entity;