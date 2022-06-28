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