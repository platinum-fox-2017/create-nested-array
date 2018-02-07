function createNestedArray(row,col){
  let dictionary = 'abcdefghijklmnopqrstuvwxyz'
  dictionary = dictionary.split('')
  let result = []
  //kotak
  for(let i = 0 ; i < row ; i++){
    result.push([])
  }
  //insert word
  for(let i = 0 ; i < row ; i++){
    for(let j = 0 ; j <col ; j++){
      result[i].push(dictionary[Math.floor(Math.random()*26)])
    }
  }
  return result
}
console.log(createNestedArray(5,3))
console.log(createNestedArray(4,2))
