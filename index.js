function createNestedArr(jumlahRow,jumlahCol){
    let arrRow = [];
    for(var i = 0; i < jumlahRow; i++){
      arrRow.push([]);    
    }
    
    for(var i = 0; i < arrRow.length; i++){
      for(var r = 0; r < jumlahCol; r++){
        let char = randomChar();
        arrRow[i].push(char);
      } 
    }
    return arrRow;
    
}

function randomChar(){
    let  possible = "abcdefghijklmnopqrstuvwxyz";
    let  text = possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}


console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
