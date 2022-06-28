let n = 8;
let star = "";

for (let i = 1; i <= n; i++) {
  for (let j = n; j > i; j--) {
    star += "  ";
  }
  for (let k = 0; k < i * 2 - 1; k++) {
    star += "* ";
  }
  star += "\n";
}

for (let i = 1; i <= n - 1; i++) {
  for (let j = 0; j < i; j++) {
    star += "  ";
  }
  for (let k = (n - i) * 2 - 1; k > 0; k--) {
    star += "* ";
  }
  star += "\n";
}

console.log(star);
