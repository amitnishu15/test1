var args1 = [1,2,3,4];

var args2 = [5,6,8];

var args3 = [...args1, ...args2];

//console.log(args3);

function args4(...args) {
    console.log(args)
}

args4(4,6,8);