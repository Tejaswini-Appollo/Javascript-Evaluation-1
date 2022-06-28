let sentence = "Hey there This is Tejaswini";

let reverseArray = sentence.split(" ").reverse();

let output = "";
reverseArray.forEach(element => {
    output = output + element + " ";
});

console.log(output);