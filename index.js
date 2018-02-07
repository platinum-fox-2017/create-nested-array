function nestedArray(jumlahRow,jumlahCol){
  var chars = "abcdefghijklmnopqrstuvwxyz";
  var arrAlphabet=[];
  for(var i=0;i<jumlahRow;i++) {
    arrAlphabet.push([]);
    for(var j=0;j<jumlahCol;j++) {
      arrAlphabet[i].push(chars[Math.floor(Math.random() * chars.length)]);
    }
  }
  return arrAlphabet;
}

console.log(nestedArray(4,3));
