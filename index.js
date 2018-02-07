function createNestedArr(totalRow, totalCol) {
    let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let arr = []
    for (let i = 0; i < totalRow; i++) {
        arr.push([])
        for (let j = 0; j < totalCol; j++) {
            let random = Math.floor(Math.random() * char.length)
            arr[i].push(char[random])
        }
    }
    console.log(arr)
}
createNestedArr(4,2)