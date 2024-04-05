#!/usr/bin/node

/**
 *  create a new list where each value is the result of multiplying the current value by the next
 * value in the list, you can use the map method with a modified callback function
 */


// function convertToNewList(my_list) {
//     const new_list = my_list.map((value, index, array) => {
//     if (index < array.length - 1) {
//         return value * array[index + 1];
//     }
//     return value; // For the last element, return the value itself
//     });
//     return new_list
// }

const convertToNewList =(my_list)=> {
    return my_list.map((value, index, array) => {
        return index < array.length - 1 ? value * array[index+1] : value
    })
}
const my_list = [3, 2, 6, 8, 4];
new_list = convertToNewList(my_list);
console.log("Initial list:", my_list);
console.log("New list:", new_list);
