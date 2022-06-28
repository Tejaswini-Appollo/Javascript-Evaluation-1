let user = "";

function greet() {
  console.count(user);
  return "hi " + user;
}

user = "bob";
console.log(greet());
user = "alice";
console.log(greet());
console.log(greet());
console.count("bob");