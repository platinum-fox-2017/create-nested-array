function createNestedArr(jumlahRow, jumlahCol){
  console.log('------------------------');
 var abjad = 'abcdefghijklmnopqrstuvwxyz';
 var nestedArr = [];
 for(var i=0; i<jumlahRow; i++){
   var arr = [];
   for(var j=0; j<jumlahCol; j++){
     var isi = abjad[Math.floor((Math.random()*25)+1)];
     arr.push(isi);
   }
   nestedArr.push(arr);
 }
 return nestedArr;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));
