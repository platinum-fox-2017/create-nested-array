const createNestedArr = (jumlahRow, jumlahCol) => {
  let result = []
  let lib = "abcdefghijklmnopqrstuvwxyz"


  for (let i = 0; i < jumlahRow; i++) {
    result.push([])
    for (let j = 0; j < jumlahCol; j++) {
      let randomAlfa = Math.floor(Math.random() * 25)
      result[i].push(lib[randomAlfa])
    }
  }
  return result

}

console.log(createNestedArr(3,5));
