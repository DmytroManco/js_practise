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
        if(!curr.hasOwnProperty(next) && next) {
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
