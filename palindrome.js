const readline = require('readline');

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

function isPalindrome(str){
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split("").reverse().join("");
}

function reverString(str){
    return str.split("").reverse().join("");
}
