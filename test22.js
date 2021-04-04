let strArr = ['A', 'B', 'C'];
let pAndCArr = [];

function abc(num) {
  for (let i = 0; i <= strArr.length; i++) {
    for (let j = 0; j < strArr.length; j++) {
      pAndCArr.push(strArr[i] + strArr[j]);
    }
  }
  console.log(pAndCArr);
}

//console.log(pAndCArr);

abc(strArr);
