//Declarar clase
/*class User {};

//Instancia de clase
const newUser = new User();*/

class user{
    //Metodos
    greeting(){
        return 'Hello';
    }
};

const rb = new user();
console.log(rb.greeting());

// Constructor
class user {
    constructor(){
        console.log('New User');
    }
    greeting(){
        console.log('Hello');
    }
}

const rob = new user();
rob.greeting();

// This
class user {
    constructor(name){
        this.name = name;
    }
    //Metodo
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new user('Ana');
console.log(ana.greeting());

class user{
    constructor(name, age){
        this.name = name;
        this. age = age;
    }
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age = n;
    }
}

const ro = new user('Robert', 37);
console.log(ro.uAge);
console.log(ro.uAge = 20);