function greatestCommonDiv(x, y) {
    let factorX = [];
    let factorY = [];
    for(let i = 1; i <= x; i++) {
        if(x % i == 0) {
            factorX.push(i);
        }
    }
    for(let i = 1; i <= y; i++) {
        if(y % i == 0) {
            factorY.push(i);
        }
    }
    console.log(factorX);
    console.log(factorY);
    for(let i = factorX.length; i > 0; i--) {
        if(factorY.find(x => x == factorX[i])) {
            let g = factorX[i];
            console.log(g);
            return;
        }
    }
}

greatestCommonDiv(20, 12);