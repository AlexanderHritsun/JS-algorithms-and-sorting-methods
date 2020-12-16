//release the sum(a)(b) = a + b; function

const sum = a => {
    return b => a + b;
};

console.log(sum(5)(5));