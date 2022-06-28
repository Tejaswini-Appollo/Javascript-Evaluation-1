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
