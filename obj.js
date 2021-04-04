//Using literal
let literalObj = {};
literalObj.firstname = "Amit";
literalObj.lastname = "Jain";
literalObj['gender'] = "Mail";
//console.log(literalObj);

//Using literal with initialization
let initalObj = {
    firstname: "Amit",
    lastname: "Jain"
}
//console.log(initalObj);

//Using new keyword(object constructor)
let newObj = new Object();
newObj.firstname = "Amit";
newObj.lastname = "Jain";
//console.log(newObj);

//Using Factory function
function factFun() {
    return {
        firstname : "Amit",
        lastname : "Jain"
    }
}
let fatherSon = factFun();
let motherSon = factFun();
//console.log(motherSon);

//Using Constructor function
function constFun() {
    this.firstname = "Amit",
    this.lastname = "jain"
}
var x = new constFun();
console.log(x);

//Using Object.create
let objCreate = {
    firstname : "Amit"
}

let objCreate2 = Object.create(objCreate, {});
console.log(objCreate2.firstname);