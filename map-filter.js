const numbers = [1, 2, 3, 4, 5];

function output(elements){
    console.log (elements);
}

output(numbers);



// const output = [];

// for (let i = 0; i <numbers.length; i++){
//     const elements = numbers[i];
//     const result = elements * elements;
//     output.push(result);
// }

// console.log(output);

// const result = numbers.map(function(elements){
//     return elements * elements;
// })

// console.log(result);

const square = numbers.map(elements => elements * elements)
console.log(square);

const bigger = numbers.filter(x => x > 2)
console.log(bigger);

const digit = numbers.find(y => y > 4)
console.log(digit);