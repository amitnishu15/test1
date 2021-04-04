let x = 69;
// let primeFactor = [];
// for(let i = 0; i < x; i++) {
//     for(let j = 2 ; j < i; j++) {

//     }
// }
let primeArr = [];
for (let j = 2; j < x; j++) {
  let prime = true;
  for (let i = 2; i < j; i++) {
    if (j % i == 0) {
      prime = false;
    }
  }
  if (prime) {
    primeArr.push(j);
  }
}

console.log(primeArr);

let primeFactor = [];
for(let i = 0 ; i < primeArr.length; i++) {
    if(x % primeArr[i] == 0) {
        primeFactor.push(primeArr[i]);
    }
}

console.log(primeFactor);