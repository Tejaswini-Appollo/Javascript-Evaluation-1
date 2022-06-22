var num = 2;
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