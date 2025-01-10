// ============ 1 ==============
console.log("============= 1 ==============");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
// ============= 2 ==============
console.log("============= 2 ==============");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("============= 3 ==============");
let score = 50;
if (score <= 100 && score > 95) {
    console.log("A");
} else if (score <= 95 && score > 85) {
    console.log("B");
} else if (score <= 85 && score > 75) {
    console.log("C");
} else if (score <= 75 && score > 65) {
    console.log("D");
} else if (score <= 65 && score >= 50) {
    console.log("E");
} else {
    console.log("F");
}
console.log("============= 4 ==============");
// {Lara: 1000}
const emp = ['Lara','Evee','Simi'];
const salary = [1000,1200,3000];

let empWithSalary = {}
empWithSalary.age = 10;
empWithSalary['year'] = 10;

for(let i = 0 ;i < emp.length ; i++){
    empWithSalary[emp[i]] = salary[i];   
}
console.log(empWithSalary);
