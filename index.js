function nestArr(jumlahRow, jumlahCol){
  let rows = [];
  for (let i = 1; i <= jumlahRow; i++) {
    rows.push([]);
  }
  for (let i = 0; i < rows.length; i++) {
    for (let j = 1; j <= jumlahCol; j++) {
      let randomWord = generateAlphabet();
      rows[i].push(randomWord);
    }
  }
  return rows;
}

function generateAlphabet(){
  let lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
  let index = Math.round(Math.random()*lowerCaseAlphabet.length);
  return lowerCaseAlphabet[index-1];
}

console.log(nestArr(4, 6));
console.log(nestArr(5, 3));
console.log(nestArr(2, 7));
