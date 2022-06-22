var count = 0;
for(var i = 1; i <= 7; i++) {
    var result = "";
    for(var j = 1; j <= i; j++) {
        count += 1;
        result = result + count + " ";
    }
    console.log(result);
}