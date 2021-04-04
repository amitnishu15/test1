let x = 10;
let fib = [0, 1];
for(let i = 1; i < x; i++) {
    let y = fib[i-1] + fib[i];
    if(y <= x) {
        fib.push(y);
    }
    
}
console.log(fib);