let x = [1,3,2,1,4,5,4,1,7];
console.log(x);

x = x.filter(function(item, index, inputArray) {
    return inputArray.indexOf(item) == index;
})

console.log(x);