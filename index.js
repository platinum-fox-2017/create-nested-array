const createNestedArr = (jumlahRow,jumlahCol)=>{
    const letter = 'abcdefghijklmnopqrstuvwxyz'
    let array =[]
    for(let i =0;i<jumlahRow;i++){
        array.push([])
        for(let j=0;j<jumlahCol;j++){
            let random = Math.floor(Math.random()*letter.length)
            let randomLetter = letter.charAt(random)
            array[i].push(randomLetter)
        }
    }
    return array
}
console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))