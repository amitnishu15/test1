var x = 1000;

let primeArray = [];

for(let i = 1; i <= x; i++) {
    let prime = false;
    for(let j = 1; j <= x/2; j++) {
        if(i%j == 0) {
            //return;
            //console.log("Not a Prime");
            //return;
        }
        else {
            prime = true;
            primeArray.push(i);
            //console.log("Prime");
        }


    }

    //console.log(prime);
    // if(prime) {
    //     primeArray.push(i);
    // }
}
console.log(primeArray);