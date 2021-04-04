let arr = [1,3,6,-2];
let max_sum_so_far = -10000;
for(let i = 0; i < arr.length; i++) {
    for(let j = i; j < arr.length; j++) {
        let maxSum = 0;
        for(let k = i; k <= j; k++) {
            maxSum = maxSum + arr[k];
            if(maxSum > max_sum_so_far) {
                max_sum_so_far = maxSum;
            }
        } 
    }
}
console.log(max_sum_so_far);