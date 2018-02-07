function createNestedArray(jumlahRow,jumlahCol){
  let kamus = 'abcdefghijklmnopqrstuvwxyz'
  let arr = []
  for(let i=0;i<jumlahRow;i++){
    arr.push([])
    for(let j=0;j<jumlahCol;j++){
      arr[i].push(kamus[Math.floor(Math.random()*26)])
    }
  }
  return arr
}

console.log(createNestedArray(5,3));
console.log(createNestedArray(4,2));
