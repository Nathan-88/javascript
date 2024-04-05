#!/usr/bin/node
// function sum(arr, n) {
//     let sum_of_arr = 0;
//     for (let i = 0; i < n; i++) {
//         sum_of_arr += arr[i]
//     }
//     return sum_of_arr
// }
function sum(arr, n){
    //base case
    if (n <= 0){
        return 0
    }
    return  sum(arr, n-1) + arr[n-1];
}

console.log(sum([2, 3, 4, 5], 3))

// In this recursive implementation, the function sum takes an array arr and a number n as parameters. It calculates the sum of the first n elements in the array using recursion.

// The base case is when n is less than or equal to 0. In this case, the sum is 0, as there are no elements to sum.

// In the recursive case, the function calls itself with n decremented by 1 and adds the value of the n-1th element to the sum obtained from the recursive call.

// The recursion continues until the base case is reached, and then the sum is calculated by adding the current element to the sum obtained from the recursive call. Finally, the total sum is returned.