function createNestedArr(jumlahRow, jumlahCol) {
  let output = []
  let alfabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // console.log(Math.floor((Math.random()*25)+1));
  for(let i=0; i<jumlahRow; i++) {
    output.push([])
    for(let j=0; j<jumlahCol; j++) {
      output[i].push(alfabet[Math.floor((Math.random()*25)+1)])
    }
  }
  return output
}

console.log(createNestedArr(5,3));
/* output:
[['a','a','a'],
['a','a','a'],
['a','a','a'],
['a','a','a'],
['a','a','a']]
*/

console.log(createNestedArr(4,2));
/* output:
[['a','a'],
['a','a'],
['a','a'],
['a','a']]
*/
