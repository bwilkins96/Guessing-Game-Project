/*
console.log(checkguess)

console.log(checkguess(225))
console.log(checkguess(8))
console.log(checkguess(14))

console.log(askNumber);

console.log(randominRange(1, 10))
console.log(randominRange(1, 10))
console.log(randominRange(1, 10))
*/

const randominRange = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + 1)
}

console.log(randominRange(1, 10))
console.log(randominRange(1, 10))
console.log(randominRange(1, 10))
