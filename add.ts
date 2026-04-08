/**
 * Calculates the sum of numbers from 1 to n using iteration.
 * Time Complexity: O(n) - Linear time, iterates through each number from 1 to n
 * Space Complexity: O(1) - Constant space, only uses a few variables
 * 
 * @param n - The number to sum up to
 * @returns The sum of integers from 1 to n
 */
function addUpTo(n: number): number {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpTo(6));