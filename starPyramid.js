var num = 10;
var bottom = Math.floor(num / 2);

var space = "";
for(var i = 1; i <= num; i++) {
    if(i % 2 != 0) {
        var result = "";
        for(var j = 1; j <= i; j++) {
            result += "*";
        }
        console.log(result);
    }
}
// for(var k = bottom; k > 0; k--) {
//     var result = "";
//     for(var l = )
// }
