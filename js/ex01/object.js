const person = {
    // key
    name: "Jonh",
    // function
    getName: function () {
        return "My name is jonh";
    }
};
// add new object to object 1 
person.age = 10;
// add new object to object 2
person['dateOfBirth'] = 2002
console.log(person);


const dogs = {
    color: "Black",
    age: 2,
    width: "3kg",
    getDogColor: function () {
        return `The dog color is ${this.color}`
    },
    getAge: function(){
        return `Dog age : ${this.age}`
    }
};
console.log(dogs);
console.log(dogs.getDogColor());
console.log(dogs.getAge());



