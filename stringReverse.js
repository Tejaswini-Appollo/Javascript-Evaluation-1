var string = "fruit";
stringLength = string.length;
var result = "";
for(var i = stringLength - 1; i >= 0; i--) {
    result += string[i];
}
console.log(result); 