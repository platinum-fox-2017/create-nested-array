// Solution 1 ---------------------
function createdNestedArr(jumlahRow,jumlahCol){
  let array = [];
  for(let i = 0; i < jumlahRow; i++){
    array.push([]);
    for(let j = 0; j < jumlahCol; j++){
      let randomChar = String.fromCharCode('a'.charCodeAt()+ (Math.floor(Math.random()*('z'.charCodeAt()-'a'.charCodeAt()+1))));
      array[i].push(randomChar);
    }
  }
  return array;
}

// Solution 2 ----------------------
function createdNestedArr(jumlahRow,jumlahCol){
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let arrayResult = new Array;
  for (let i = 0; i < jumlahRow; i++){
    let tempArray = [];
    for(let j = 0; j < jumlahCol; j++){
      let randomNumber = Math.floor(Math.random()*alphabet.length);
      tempArray.push(alphabet[randomNumber]);
    }
    arrayResult.push(tempArray);
  }
  return arrayResult;
}

console.log(createdNestedArr(5,3));
console.log(createdNestedArr(4,2));
