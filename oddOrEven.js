var number = 12875440;
var numberString = number.toString();
var lengthOfNumber = numberString.length;

var sumOfEven = 0;
var sumOfOdd = 0;
for(var i = 0; i < lengthOfNumber; i++) {
    if(parseInt(numberString[i]) % 2 == 0) {
        sumOfEven += parseInt(numberString[i]);
    }
    else {
        sumOfOdd += parseInt(numberString[i]);
    }
}

console.log("Sum of Even numbers: " + sumOfEven);
console.log("Sum of Odd numbers: " + sumOfOdd);