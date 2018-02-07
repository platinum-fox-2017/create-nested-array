function createNestedArr(jumlahRow,jumlahCol){
  var isi = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  var hasil = []
  for(var i=0; i<jumlahRow; i++){
    hasil.push([])
    for(var j=0; j<jumlahCol; j++){
      hasil[i].push(isi)
    }
  }
  return hasil
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))
