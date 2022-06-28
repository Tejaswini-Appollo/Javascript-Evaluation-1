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

## 4. Word reverse
``` Javascript
let sentence = "Hey there This is Tejaswini";

let reverseArray = sentence.split(" ").reverse();

let output = "";
reverseArray.forEach(element => {
    output = output + element + " ";
});

console.log(output);
```
## Output:
``` Javascript
Tejaswini is This there Hey 
```

## 5. Palindrome
``` Javascript
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
```
## Output:
``` Javascript
Not a palindrome
```

## 6. forEach and map
``` Javascript
let fruits = ["apple", "orange", "grapes"];

fruits.forEach(fruit => {
    console.log(fruit.toUpperCase());
});

let numbers = [4, 9, 16, 25];

let squareOfNumbers = numbers.map(Math.sqrt);

console.log(squareOfNumbers);
```
## Output:
``` Javascript
APPLE
ORANGE
GRAPES
[ 2, 3, 4, 5 ]
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

## 12. Removing duplicates from an object
``` Javascript
const arrOfObjects = [
    {
        id: 1,
        name: "Stephen covey"
    }, 
    {
        id: 2,
        name: "Robin Sharma" 
    }, 
    {
        id: 3,
        name: "Tolstoy"
    }, 
    {
        id: 3,
        name: "Tolstoy"
    }, 
    {
        id: 5, 
        name: "James clear"
    }
];

function removeDuplicateObjects(arr) {
  let uniq = {};
  const result = arr.filter(
    (obj) =>
      !uniq[obj.id] && (uniq[obj.id] = true) &&
      !uniq[obj.name] && (uniq[obj.name] = true)
  );
  return result;
}

console.log(removeDuplicateObjects(arrOfObjects));
```
## Output:
``` Javascript
[
  { id: 1, name: 'Stephen covey' },
  { id: 2, name: 'Robin Sharma' },
  { id: 3, name: 'Tolstoy' },
  { id: 5, name: 'James clear' }
]
```
## 13. Object Equality
``` Javascript
const objectA = {
    id: 1, 
    name: "edison"
};
const objectB = {
    id: 1, 
    name: "edison"
};

const objectC = {
    id: 1, 
    name: "edison"
};
const objectD = {
    id: 2, 
    name: "edison"
};

if(objectA.id == objectB.id && objectA.name == objectB.name) {
    console.log("true");
}
else {
    console.log("false")
}

if(objectC.id == objectD.id && objectC.name == objectD.name) {
    console.log("true");
}
else {
    console.log("false")
}
```

## Output:
``` Javascript
true
false
```

## 14. Flatten multi-dimensional array
``` Javascript
var arr = [1,4,2,3,[10,20,20], [100,500,700,600], [2000,1000]];
console.log([].concat(...arr));
```

## Output:
``` Javascript
[1, 4, 2, 3, 10, 20, 20, 100, 500, 700, 600, 2000, 1000]
```

## 15. Array Reduce
``` Javascript
function groupById(given) {
  let name = given.reduce((arr, given) => {
    arr.push(given.id);
    return arr;
  }, []);

  console.log(name);
}
groupById([
  { id: 1, name: "edison" },
  { id: 2, name: "Annand" },
  { id: 3, name: "Vasnath" },
]);
```
## Output:
``` Javascript
[ 1, 2, 3 ]
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

## 18. Number Pyramid
``` Javascript
let result = "";
  let start = 1;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= i - 1; k++) {
      result += " " + start;
      start++;
    }
    result += "\n";
  }
  console.log(result);
```
## Output:
``` Javascript
    1
   2 3
  4 5 6
 7 8 9 10
```
## 19. Star Pyramid
``` Javascript
let n = 8;
let star = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    star += "  ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    star += "* ";
  }
  star += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    star += "  ";
  }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    star += "* ";
  }
  star += "\n";
}

console.log(star);
```
## Output:
``` Javascript
              * 
            * * * 
          * * * * * 
        * * * * * * * 
      * * * * * * * * * 
    * * * * * * * * * * * 
  * * * * * * * * * * * * * 
* * * * * * * * * * * * * * * 
  * * * * * * * * * * * * * 
    * * * * * * * * * * * 
      * * * * * * * * * 
        * * * * * * * 
          * * * * * 
            * * * 
              * 
```
## 20. Term explanation
``` Javascript 
console.log => Used to display a message in the web console.
console.dir => Used to display an interactive list of properties of the specified JavaScript object.
console.count => Used to log the number of times that the particular call to count() function has been made.
console.table => Used in displaying a tabular data.
console.trace => Outputs the stack trace.
console.group => Creates a new inline group.
console.groupEnd => Exits the current inline group.
console.assert => Writes an error message in the console.
console.time => Starts the timer to track the timing of an operation.
console.timeLog => Logs the current value of the timer.
console.timeEnd => Stops the timer.
```