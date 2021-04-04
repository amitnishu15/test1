// var o = new F();
// o.constructor === F;
o = [1,2,3]
function printProps(o) {
    for(var p in o) {
        console.log(p+ ":" +o[p] + "\n")
    }
}

console.log("Amit");