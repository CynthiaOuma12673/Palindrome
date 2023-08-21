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

function processInput(){
    rl(input.trim()===""){
        console.log('Kindly enter a valid word.');
        rl.close();
        return;
    }
}