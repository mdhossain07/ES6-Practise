const numbers = [10,20,30,40,50,60];
const nums = [1, 2, -2, 3, -3, 4, 5, -5, 6];

// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] > 30){
//         break;
//     }
//     console.log(numbers[i]);
// }

for (let j = 0; j < nums.length; j++){
    if (nums[j] < 0){
        continue;
    }
    console.log(nums[j]);
}

