function createnestedarr(jumlahrow,jumlahcol){
  var keyhuruf=' abcdefghijklmnopqrstuvwxyz'
  var output=[]
  for(let i=0;i<jumlahrow;i++){
    output.push([])
    for(let j=0;j<jumlahcol;j++){
      var huruf=Math.floor((Math.random()*26)+1)
      output[i].push(keyhuruf[huruf])
    }
  }
  console.log(output)
}

createnestedarr(4,2)
