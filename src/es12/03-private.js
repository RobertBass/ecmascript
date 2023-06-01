class user{
    constructor(name, age){
        this.name = name;
        this. age = age;
    }
    // Metodos
    #speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age = n;
    }
}

const ro = new user('Robert', 37);
console.log(ro.uAge);
console.log(ro.uAge = 20);