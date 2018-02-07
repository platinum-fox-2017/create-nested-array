function createNestedArr(jumlahRow, jumlahCol){
  let result = [];

  for(let i=0; i<jumlahRow; i++){
    let row = [];
    for(let j=0; j<jumlahCol; j++){
      let random = String.fromCharCode(96 + Math.ceil(Math.random()*26))
      row.push(random)
    }
    result.push(row)
  }
  return result
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
