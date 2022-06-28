let result = "";
  let start = 1;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
      result += " ";
    }
    for (let k = 1; k <= i - 1; k++) {
      result += " " + start;
      start++;
    }
    result += "\n";
  }
  console.log(result);

