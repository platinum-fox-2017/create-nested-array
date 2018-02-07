function createNestedArr(jumlahRow, jumlahCol) {
    var table=[];
    for(var i=0; i<jumlahRow; i++) {
        table.push([]);
        for(var j=0; j<jumlahCol; j++) {
            var alphabet=String.fromCharCode(97+Math.floor(Math.random()*25));
            table[i].push(alphabet);
        }
    }
    return table;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));