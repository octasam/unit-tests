const calc ={
    sum(a, b){
        return a + b;
    },
    substract(a,b){
        return a - b;
    },
    multiply(a,b){
        return a * b;
    },
    division(a,b){
        return a / b;
    },
    power: (a,b) => a ** b, // Intentional error
}

module.exports = calc;
