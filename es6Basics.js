let numbers1 = [1, 2, 3, 4, 5];

let numbers2 = [6, 7, 8, 9, 10, 11];

let numbers = [...numbers1,...numbers2];

const square = (x) => x * x;

const squares = numbers.map(square);

const isEven = (x) => x % 2 === 0;
console.log(isEven(4));
console.log(isEven(5));

const evenSquares = squares.filter(isEven);

const [firstEvenSquare, secondEvenSquare] = evenSquares;

console.log(`Original nums: ${numbers} Squares: ${squares}
    Even squares: ${evenSquares} First Even Square: ${firstEvenSquare} Secound Even Square ${secondEvenSquare}`);