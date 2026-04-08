// compare two arrays to see if the values in arr1 is the same as the square of the values in arr2 regardless of the order

// input type: two arrays

// output: true | false

// example: [1,2,3] and [9,1,4] -> true; [3,5,7] and [25,10,49] -> false

/**
 * Checks if the squared values of arr1 match the values in arr2 using frequency counters.
 * Time Complexity: O(N) - Three separate loops, each O(N)
 * Space Complexity: O(N) - Uses two frequency counter objects
 *
 * @param arr1 - The first array of numbers
 * @param arr2 - The second array of numbers to compare squares against
 * @returns true if arr1 squared values match arr2, false otherwise
 */
function sameFrequencyCounter(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    };
    
    const frequencyCounterOne: { [key: number]: number } = {};
    const frequencyCounterTwo: { [key: number]: number } = {};

    for (const val of arr1) {
        frequencyCounterOne[val] = (frequencyCounterOne[val] || 0) + 1;
    };

    for (const val of arr2) {
        frequencyCounterTwo[val] = (frequencyCounterTwo[val] || 0) + 1;
    };

    for (const key in frequencyCounterOne) {
        const numKey = Number(key);
        if (!(numKey ** 2 in frequencyCounterTwo)) {
            return false;
        };

        if (frequencyCounterOne[numKey ** 2] !== frequencyCounterTwo[numKey]) {
            return false;
        };
    }
    return true;
}

console.log(sameFrequencyCounter([1, 2, 3], [9, 1, 4]));
console.log(sameFrequencyCounter([3, 5, 7], [25, 10, 49]));