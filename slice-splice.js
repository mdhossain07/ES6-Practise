const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const slicing = numbers.slice(2, 5);
//console.log(slicing);
//console.log(numbers);

const splicing = numbers.splice(2, 3, 10);
//console.log(splicing);
//console.log(numbers);

const joining = numbers.join('');
console.log(joining);
console.log(typeof joining);

