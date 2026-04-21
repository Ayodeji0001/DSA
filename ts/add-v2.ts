/**
 * Calculates the sum of numbers from 1 to n using the mathematical formula.
 * Formula: Sum = n * (n + 1) / 2
 * Time Complexity: O(1) - Constant time, performs only basic arithmetic operations
 * Space Complexity: O(1) - Constant space
 * 
 * @param n - The number to sum up to
 * @returns The sum of integers from 1 to n
 */
function addUpToV2(n: number): number {
    return n * (n + 1) / 2;
};

console.log(addUpToV2(6));