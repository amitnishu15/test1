let arr = ['A','B','C','D'];

function abc(num) {
    if(num > arr.length) {
        console.log("Greater");
        let remain = num - arr.length;
        
        console.log(remain);
        // newNum1 = num % 4;
        // newNum2 = 
        //console.log(newNum1);
        // newNum = num - 4;
        // console.log(arr[newNum - 1] + arr[newNum - 1]);
    }
    else {
        console.log("Not Greater");
        console.log(arr[num-1]);
    }
}

abc(4);