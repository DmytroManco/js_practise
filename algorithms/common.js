// Given a string of characters as input, write a function that returns it with the characters reversed.
function reversed(str) {
    return str.split('').reverse().join('');
}

function reversed2(str) {
    return str.split('').reduce((current, next) => next + current);
}

function reversed3(str) {
    let result = '';
    for (const char of str) {
        result = char + result;
    }
    return result;
}

// A palindrome is a word or phrase that reads the same backward as forward. Write a function that checks for this.
function isPalindrome(str) {
    const onlyWords = str.replace(/\d|\W/g, '');

    return onlyWords === reversed(onlyWords);
}

// Given an integer, reverse the order of the digits.
function reverseInteger(num) {
    const reversedStr = reversed(num.toString());
    return parseInt(reversedStr, 10) * Math.sign(num);
}

// Fizz Buzz
function fizzBuzz(num) {
    if (num % 6 === 0) {
        return 'Fizz Buzz';
    }
    if (num % 3 === 0) {
        return 'Buzz';
    }
    if (num % 2 === 0) {
        return 'Fizz';
    }

    return num;
}

// Max Character. Given a string of characters, return the character that appears the most often.
function maxCharacter(str) {
    const characterArr = str.replace(/\s/g, '').split('');

    const charactersObj = characterArr.reduce((curr, next) => {
        if (!curr.hasOwnProperty(next)) {
            curr[next] = 1;
            return curr;
        }

        if (curr.hasOwnProperty(next)) {
            curr[next] = curr[next] + 1;
            return curr;
        }
    }, {});

    const sortedCharacterArr = Object.entries(charactersObj).sort((a, b) => b[1] - a[1]);

    return sortedCharacterArr[0][0];
}

// Anagrams are words or phrases that contain the same number of characters. Create a function that checks for this.
function characterCounter(str) {
    return str
        .replace(/\s/g)
        .split('')
        .reduce((obj, character) => {
            if (!obj.hasOwnProperty(character)) {
                obj[character] = 1;
                return obj;
            }

            if (obj.hasOwnProperty(character)) {
                obj[character] = obj[character] + 1;
                return obj;
            }
        }, {})
}

function checkAnagram(str1, str2) {
    const characterCounter1 = characterCounter(str1);
    const characterCounter2 = characterCounter(str2);

    if (Object.keys(characterCounter1).length !== Object.keys(characterCounter2).length) return false;

    for (const char in characterCounter1) {
        if (characterCounter1[char] !== characterCounter2[char]) return false;
    }

    return true;
}

function checkAnagram2(str1, str2) {
    const sortedStr1 = str1.replace(/\s/g, '').split('').sort().join();
    const sortedStr2 = str2.replace(/\s/g, '').split('').sort().join();

    return sortedStr1 === sortedStr2;
}

// Given a string of words or phrases, count the number of vowels
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let counter = 0;

    for (let character of str.toLowerCase()) {
        if (vowels.includes(character)) {
            counter++;
        }
    }

    return counter;
}

function countVowels2(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// Array Chunking. Given an array and a size, split the array items into a list of arrays of the given size
function chunkArr(arr, chunks) {
    const newArr = [];

    while (arr.length) {
        const chunk = arr.splice(0, chunks);
        newArr.push(chunk);
    }

    return newArr;
}

//  Reverse Array. Given an array of items, reverse the order.
function reverseArr(arr) {
    const reversed = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }

    return reversed;
}

// Given a phrase, reverse the order of the characters of each word.
function reverseWord(str) {
    const stringArr = str.split(' ').map(reversed);

    return stringArr.join(' ');
}

//  Capitalization. Given a phrase, capitalize every word.
function capitalization(str) {
    return str
        .split(' ')
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' ');
}

// Given a phrase, substitute each character by shifting it up or down the alphabet by a given integer.
// If necessary, the shifting should wrap around back to the beginning or end of the alphabet.
function caesarCipher(string, number) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const input = string.toLowerCase();
    let output = "";

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (alphabet.indexOf(letter) === -1) {
            output += letter;
            continue;
        }

        let index = alphabet.indexOf(letter) + number % 26;
        if (index > 25) index -= 26;
        if (index < 0) index += 26;

        output += string[i] === string[i].toUpperCase()
            ? alphabet[index].toUpperCase()
            : alphabet[index];
    }

    return output;
}

// Given a magazine of words and a ransom note, determine if it’s possible to “cut out” and
// create the ransom note from the magazine words
const magazine = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint  
    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

function ransomNote(notes, magazine) {
    const notesArr = notes.toLowerCase().split(' ');

    for (const note of notesArr) {
        if (!magazine.toLowerCase().includes(note)) {
            return false;
        }
    }

    return true;
}

// Given an array of numbers, calculate the mean, median, and mode.
class Stats {
    constructor(nums) {
        this.nums = nums;
    }

    mean() {
        const value = this.nums.reduce((a, b) => a + b) / this.nums.length;

        return Math.round(value * 100) / 100;
    }

    medium() {
        if (this.nums.length % 2 !== 0) {
            return this.nums[Math.floor(this.nums.length / 2)];
        }

        const index1 = this.nums.length / 2 - 1;
        const index2 = this.nums.length / 2;
        const value = this.nums.sort()[index1] + this.nums.sort()[index2] / 2;

        return Math.floor(value * 10) / 10;
    }

    mode() {
        const table = this.nums.reduce((obj, next) => {
            if (obj[next]) {
                obj[next] += 1;
            }

            if (!obj[next]) {
                obj[next] = 1;
            }

            return obj;
        }, {});
        let [modes, max] = [[], 0];

        for (const key in table) {
            const value = parseFloat(key);
            const count = table[key];

            if (count > max) {
                modes = [value];
                max = count;
            } else if (count === max) {
                modes.push(value);
            }
        }

        if (modes.length === Object.keys(table).length) {
            modes = [];
        }

        return modes;
    }
}

const stat1 = new Stats([1, 2, 3, 3, 4, 5, 5]);
const stat2 = new Stats([1, 1, 2, 2, 3, 3, 4, 4, 0]);

// Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.
function twoSum(arr, sum) {
    const pairs = [];
    const store = [];

    for (let part1 of arr) {
        const part2 = sum - part1;
        if (store.indexOf(part2) !== -1) {
            pairs.push([part1, part2])
        }
        store.push(part1);
    }

    return pairs;
}

// Given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.
function maxProfit(prices) {
    return [Math.min.apply(null, prices), Math.max.apply(null, prices)];
}

// For a given number, find all the prime numbers from zero to that number.
function primes(num) {
    const numbers = new Array(num + 1);
    numbers.fill(true);
    numbers[0] = numbers[1] = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let j = 2; i * j <= num; j++) {
            numbers[i * j] = false;
        }
    }

    return numbers.reduce((primes, isPrime, prime) => {
        if (isPrime) {
            primes.push(prime);
        }
        return primes;
    }, []);
}

// Fibonacci Implement a function that returns the fibonacci number at a given index.
function fibonacci(num) {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
}

// Implement a performant recursive function for the fibonacci series.
const _memoize = fn => {
    const cache = {};
    return (...args) => {
        if (cache[args]) return cache[args];

        const output = fn.apply(this, args);
        cache[args] = output;
        return output;
    };
};

const _fibonacci = element =>
    element < 2
        ? element
        : _memoized_fibonacci(element - 1) + _memoized_fibonacci(element - 2);
const _memoized_fibonacci = _memoize(_fibonacci);

// For a given number of steps, print out a “staircase” using hashes and spaces.
function stairCase(num) {
    let str = '';

    for (let row = 0; row < num; row++) {
        let line = '';
        for (let column = 0; column < num; column++) {
            line += column <= row ? '#' : ' ';
        }
        str += line + '/n';
    }

    return str;
}

// For a given number of levels, print out a “pyramid” using hashes and spaces.
const pyramid = number => {
    let levels = "";
    const midpoint = Math.floor((2 * number - 1) / 2);

    for (let row = 0; row < number; row++) {
        let level = "";
        for (let column = 0; column < 2 * number - 1; column++)
            level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
        levels += level + "\n";
    }

    return levels;
};

// Create a square matrix of a given size in which elements are in spiral order.
const spiral = number => {
    let counter = 1;
    let startRow = 0,
        endRow = number - 1;
    let startColumn = 0,
        endColumn = number - 1;

    const matrix = [];
    for (let i = 0; i < number; i++) matrix.push([]);

    while (startColumn <= endColumn && startRow <= endRow) {
        // Start Row
        for (let i = startColumn; i <= endColumn; i++) {
            matrix[startRow][i] = counter;
            counter++;
        }
        startRow++;

        // End Column
        for (let i = startRow; i <= endRow; i++) {
            matrix[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        // End Row
        for (let i = endColumn; i >= startColumn; i--) {
            matrix[endRow][i] = counter;
            counter++;
        }
        endRow--;

        // Start Column
        for (let i = endRow; i >= startRow; i--) {
            matrix[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
    }

    return matrix;
};

function bubbleSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        arr.forEach((element, index, array) => {
            if (element > array[index + 1]) {
                array[index] = array[index + 1];
                array[index + 1] = element;
                sorted = false;
            }
        });
    }

    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                const temp = arr.splice(i, 1);
                arr.splice(j, 0, temp[0]);
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        const temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

function quickSort(arr) {
    if (arr.length < 1) return arr;

    const [pivot, ...rest] = arr;
    const left = [];
    const right = [];

    rest.forEach(el => el < pivot ? left.push(el) : right.push(el));

    return quickSort(left).concat(pivot).concat(right);
}

function mergeSort(arr) {
    if (arr.length < 2) return arr;
    const middleIndex = Math.floor(arr.length / 2);
    const left = arr.slice(0, middleIndex);
    const right = arr.slice(middleIndex);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }

    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());

    return result;
}

function countingSort(arr) {
    let i, j;
    let k = 0;
    let min = arr[0];
    let max = arr[0];
    const counts = [];
    const result = [];

    for (i = 0; i < arr.length; i++) {
        if (min > arr[i])
            min = arr[i];
        else if (max < arr[i])
            max = arr[i];
    }

    for (i = 0; i < max - min + 1; i++) {
        counts[i] = 0;
    }
    for (i = 0; i < arr.length; i++) {
        counts[arr[i] - min]++;
    }

    for (i = 0; i < counts.length; i++) {
        for (j = 0; j < counts[i]; j++) {
            result[k++] = i + min;
        }
    }

    return result;
}

console.log(countingSort([5, 4, 3, 2, 1]));