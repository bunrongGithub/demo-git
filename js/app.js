let name = 10 // global scope
function getName() {
    name = 'asdfgh';
    console.log(name);
}
getName();

const age = 10; // local scope
function getAge() {
    age = 12;
    console.log(age);
}
getAge();

// string , number, boolean ,underfined ,null ,object 
// ========================
const arrObject = [
    {
        id: 1,
        name: "asdfgh",
    },
    {
        id: 2,
        name: "asdfgh",
    },
]
console.log(typeof (arrObject));
console.log(10);
let check = false;
let result = check ? "Check is true" : " Check is false";
console.log(result);



