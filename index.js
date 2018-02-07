function createNestedArr(row, col) {
  let result = [];
  let chars = 'abcdefghijklmnopqrstuvxyz';

  for (let i = 0; i < row; i++) {
    let rows = [];
    for (let j = 0; j < col; j++) {
      let randomChar = chars.charAt(Math.random() * chars.length);
      rows.push(randomChar);
    }
    result.push(rows);
  }
  return result;
}

console.log(createNestedArr(4, 2));
console.log(createNestedArr(5, 3));
