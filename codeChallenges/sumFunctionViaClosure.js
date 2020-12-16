//release the sum(a)(b) = a + b; function

const sum = a => {
    return b => a + b;
};

console.log(sum(5)(5));


const sum2 = n => {
    let currentSum = n;
    function f(b) {
        currentSum += b;
        return f;
    }
    f.toString = function() {
        return currentSum;
    };

    return f;
}

sum2(5)(10)(20);