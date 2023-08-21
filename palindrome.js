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
    rl.question("Enter a word: ", (input) => {
    if (input.trim()===""){
        console.log('Kindly enter a valid word.');
        rl.close();
        return;
    }

    if (isPalindrome(input)){
        console.log("It's a palindrome");
    } else{
        const reversed = reverString(input);
        console.log("This is not a palindrome.Reversed:" ,reversed);

    }
    rl.close();
});
}
