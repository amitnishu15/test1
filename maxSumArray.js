function findMaxSubArrayBruteForce(arr) {
    var max_so_far = Number.NEGATIVE_INFINITY;
    console.log(max_so_far);
    var leftIndex = 0,
        rightIndex = arr.length - 1,
        len = arr.length;

    for (var i = 0; i < len; i++) {

        for (var j = i; j < len; j++) {
            maxSum = 0;

            for (var k = i; k <= j; k++) {
                maxSum = maxSum + arr[k];
                
                if (max_so_far < maxSum) {
                    leftIndex = i;
                    max_so_far = maxSum;
                    rightIndex = j;
                }
            }
        }
    }
    return {
        left: leftIndex,
        right: rightIndex,
        final_max_sum_subArray: max_so_far
    };
}

function findMaxSubArrayBruteForce2(arr) {
    var max_so_far =   - 10000;

    for (var i = 0; i < arr.length; i++) {

        for (var j = i; j < arr.length; j++) {
            maxSum = 0;

            for (var k = i; k <= j; k++) {
                maxSum = maxSum + arr[k];
                
                if (max_so_far < maxSum) {
                    max_so_far = maxSum;
                }
            }
        }
    }
    return {
        final_max_sum_subArray: max_so_far
    };
}

var array = [1, 5, 3, -6];
function findMaxSubArrayBruteForce3(arr) {
    var max_sum_so_far = -10000;
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
    return {
        max_sum_so_far
    }
}

console.log(findMaxSubArrayBruteForce3(array));