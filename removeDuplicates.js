var arr = [1, 2, 9, 4, 5, 8, 3, 5, 1, 4, 5];
var newArr = [];

arr.forEach(element => {
    if(!newArr.includes(element)) {
        newArr.push(element);
    }
});
console.log(newArr);