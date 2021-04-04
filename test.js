let s = "abcedeabcbb"
let subString = [];
for(let i = 0; i < s.length -1; i++) {
    console.log(s[i]);
    let prev = s[i];
    let next = s[i+1];
    if(prev != next) {
        subString.push(prev);
    }
}
// // let final = subString.toString();
// console.log(subString);
// let repeat = [];
// for(let i = 0; i < subString.length; i++) {
//     for(let j = i+1; j < subString.length; j++) {
//         if(subString[i] == subString[j])
//         repeat.push(subString[i])
//     } 
// }
// console.log(repeat);
// for(let i = 0; i < subString.length; i++) {
//     if(subString.find(x => x == repeat)) {

//     }
// }

// //let final = subString.map();
// //console.log(final);
// //ababcbc
// //abc