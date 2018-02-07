function createNestedArr(jumlahRow, jumlahCol) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';

    let resArr = [];
    for (let i = 0; i < jumlahRow; i++) {
        let tempArr = []
        for (let j = 0; j < jumlahCol; j++) {
            tempArr.push(alphabet[Math.floor(Math.random() * 15)])
        }
        resArr.push(tempArr)
    }
    return resArr
}

console.log(createNestedArr(5, 3));
console.log(createNestedArr(4, 2));