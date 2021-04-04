let arr = [1,5,3,6,3,1,8,3];
//let duplicate = [];
console.log(arr);

arr = arr.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) == index;
});

console.log(arr);

// for(let i = 0; i < arr.length; i++) {
//     let elem = arr[i];
//     let count = 0;
//     for(let j = i; j < arr.length; j++) {
//         if(elem == arr[j]) {
//             count++;
//         }
//     }
//     if(count > 1) {
//         duplicate.push(elem);
//     }
// }

// console.log(duplicate);