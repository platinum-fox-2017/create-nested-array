function createNestedArr(jumlahRow, jumlahCol) {
    // YOUR CODE HERE...

    var kursi = [];
    
    for (var i = 0; i < jumlahRow; i++) {
        kursi.push([]);
            for (var j = 0; j < jumlahCol; j++) {
                var alphabet = 'abcdefghijklmnopqrstuvwxyz';
                // console.log(alphabet.length); // 26
                var angkaRandom = Math.round(Math.random()*26); 
            kursi[i].push(alphabet[angkaRandom]);
        }
    }
        
   return kursi;

}


console.log(createNestedArr(4,3));
//output:
/*



*/