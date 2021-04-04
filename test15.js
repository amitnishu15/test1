var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27


function createBase(num1) {
    return function (num2) {
        let add = num1 + num2;
        console.log(add);
    }
}

