let string = "sure";
let lengthOfString = string.length;

stringLen = Math.floor(lengthOfString/2);

for ( var i = 0; i < stringLen; i++ ) {
    if (string[i] !== string[lengthOfString - 1 - i]) {
        console.log("Not a palindrome");
        break;
    }
    else {
        console.log("It is a palindrome");
        break;
    }
}


