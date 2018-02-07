function createNestedArr(jumlahRow, jumlahCol) {
    var arrBalikan = [];
    for (var i = 0; i < jumlahRow; i++) {
        var array = [];
        for (var j = 0; j < jumlahCol; j++) {
            array.push(String.fromCharCode(Math.floor(Math.random() * 26) + 97));
        }
        arrBalikan.push(array);
    }
    return arrBalikan;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
console.log(createNestedArr(1,7));