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