function outerFunction() {
    var x = 5;
    function innerFunction() {
       console.log(x * 10);
    }
    innerFunction();
}

outerFunction();