# Javascript Evaluation 

## 1. Prime number or not
``` Javascript
var num = 9;
var flag = 0;

for(var i = 2; i < num; i++) {
    if(num % i == 0) {
        flag = 1;
        break;
    }
}

if(flag) {
    console.log("The number is not a prime number.");
}
else {
    console.log("The number is a prime number.");
}
```

## Output:
``` Javascript
The number is not a prime number.
```






## 2. Difference between == and ===
* == - When given it will compare only the value.
* === - When given it checks for both the value as well as the datatype.

## 3. String reverse
``` Javascript
var string = "fruit";
stringLength = string.length;
var result = "";
for(var i = stringLength - 1; i >= 0; i--) {
    result += string[i];
}
console.log(result); 
```

## Output:
``` Javascript
tiurf
```

## 7. To generate a random number
``` Javascript
console.log(Math.floor(Math.random() * 5) + 1);
```

## Output:
``` Javascript
4 
```

## 8. To remove duplicates from an array
``` Javascript
var arr = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
var newArr = [];

arr.forEach(element => {
    if(!newArr.includes(element)) {
        newArr.push(element);
    }
});
console.log(newArr);
```

## Output:
``` Javascript
[1, 2, 9, 4, 5, 8, 3]
```

## 9. Sum of n Natural numbers
``` Javascript
var num = 10;
var sum = 0;

for(var i = 1; i <= num; i++) {
    sum += i;
}

console.log(sum);
```

## Output:
``` Javascript
55
```

## 10. Even and Odd numbers
``` Javascript
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
```

## Output:
``` Javascript
Sum of Even numbers: 18
Sum of Odd numbers: 13
```

## 11. Merging Array
``` Javascript
arr1 = [1, 2, 9, 3, 5, 1, 4, 5];
arr2 = [11, 54, 70, 40];

mergedArray = [...arr1, ...arr2];
console.log(mergedArray);
``` 

## Output:
``` Javascript
[1, 2, 9, 3, 5, 1, 4, 5, 11, 54, 70, 40]
```

## 16. Star Triangle
``` Javascript
for(var i = 1; i <= 5; i++) {
    var star = "";
    for(var j = 1; j <= i; j++) {
        star += "*";
    }
    console.log(star);
}
```

## Output:
``` Javascript
*
**
***
****
*****
```

## 17. Number Triangle
``` Javascript
var count = 0;
for(var i = 1; i <= 4; i++) {
    var result = "";
    for(var j = 1; j <= i; j++) {
        count += 1;
        result = result + count + " ";
    }
    console.log(result);
}
```

## Output:
``` Javascript
1 
2 3 
4 5 6 
7 8 9 10 
```