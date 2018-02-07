function createNestedArr(jumlahRow, jumlahCol){
    let letters = 'abcdefghijklmnopqrstuvwxyz'
    let result = [];

    for(let i=0; i<jumlahRow; i++){
        let row = [];
        for(let j=0; j<jumlahCol; j++){
            let randomCharacter = letters.charAt(Math.floor(Math.random() * letters.length));
            row.push(randomCharacter);
        }
        result.push(row);
    }
    return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));