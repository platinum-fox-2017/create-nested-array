function createNestedArr(row, col) {
  let newArr = []
  let alphabet = 'abcdefghijklmno'
  for (var i = 0; i < row; i++) {
    let row = []
    for (var j = 0; j < col; j++) {
      row.push(alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    }
    newArr.push(row)
  }

return newArr

}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
