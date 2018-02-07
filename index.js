function createNestedArr(jumlahRow, jumlahCol) {
    var bigWrap = [];
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var x= 1;
    // for 1, untuk membuat baris (menampung kolom)
    for(var i=1; i<=jumlahRow; i++){
        var wrap = [];
        for(var j=1; j<=jumlahCol; j++){
            var random = abjad[Math.floor(Math.random() * abjad.length)];
            wrap.push(random);
        }
        bigWrap.push(wrap);
    }
    console.log(bigWrap);

}

createNestedArr(5,3);
console.log('---------------------');
createNestedArr(4,2);