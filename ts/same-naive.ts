// compare two arrays to see if the values in arr1 is the same as the square of the values in arr2 regardless of the order

// input type: two arrays

// output: true | false

// example: [1,2,3] and [9,1,4] -> true; [3,5,7] and [25,10,49] -> false

// STEPS
// Check if the length of the arrays are the same, if not, terminate immediately by returning false.
// Loop through arr1
// Loop through arr2
// Check if item ** 2 from arr1 is equal to item in arr2
// If the value of item ** 2  not found in arr2, return false
// Else remove the item from arr2 before proceeding to handle duplicates

// if you get to this point (i.e after running both loops) without terminating, return true

/**
 * Checks if the squared values of arr1 match the values in arr2, regardless of order.
 * Time Complexity: O(N^2) - Nested loops: outer loop O(N), inner indexOf O(N)
 * Space Complexity: O(1) - Modifies arr2 in place, no additional space proportional to input
 *
 * @param arr1 - The first array of numbers
 * @param arr2 - The second array of numbers to compare squares against
 * @returns true if arr1 squared values match arr2, false otherwise
 */
function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    };
    for (const item of arr1) {
        let correctIndex = arr2.indexOf(item ** 2)

        if (correctIndex === -1) {
            return false;
        };

        arr2.splice(correctIndex, 1)
    };

    return true;
}

console.log(same([1, 2, 3], [9, 1, 4]));
console.log(same([3, 5, 7], [25, 10, 49]));