function createNestedArr (jumlahRow, jumlahCol) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    
    for (let i = 0; i < jumlahRow; i++){
        result.push([]);
        for (let j = 0; j < jumlahCol; j++){
            let randomLetter = alphabet[Math.abs(Math.round(Math.random() * alphabet.length-1))];
            result[i].push(randomLetter);
        }
    }
    return result;
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))