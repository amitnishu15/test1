var a = [13,24,9,45,56];
console.log(a);

for(let i = 0; i < a.length; i++) {
    if(a[i] < a[i+1]) {
        let temp = a[i];
        a[i] = a[i+1];
        a[i+1] = temp;
        i = -1;
    }
}

console.log(a);

console.log(a[1]);