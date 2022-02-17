let number = 2;

//stateful functions
function square() {
    return number * number;
}

number = square();

//stateless functions

const square = number => number * number;