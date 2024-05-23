class Prson{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
    }
};

const person1 = new Prson('hanna',27);

function describePerson(callback) {
    return callback();
};

function wait(seconde){
    return new Promise(resolve => setTimeout(resolve,seconde));
}

console.log(person1.introduce());
describePerson(function(){
    console.log(person1.introduce());
});