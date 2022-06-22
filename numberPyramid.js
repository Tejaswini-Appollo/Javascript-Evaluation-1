var num = 4;
var count = 1;

for(var i = num; i >= 1; i--) {
    var space = "";
    for(var j = i; j >= 1; j--) {
        space += " ";
    }
    console.log(space + count + " ");
    count += 1;
}
