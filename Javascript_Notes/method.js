class Conversation {

    constructor(name, object) {
        this.name = name;
        this.object = object;
    }

    greeting(name) {
        return `hi ${name}` ;
    }

    rating(object){
        console.log(`the ${object} is working super fine`);
    }

}

let obj = new Conversation();
console.log(obj.greeting('kumar'));
obj.rating('washing machine');