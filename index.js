const createNestedArr = (rows, cols) => {
    let arrNested2d = []
    let possibleChar = 'abcdefghijklmnopqrstuvwxyz'
    for (let i = 0; i < rows; i++) {
        arrNested2d.push([])
        for (let j = 0; j < cols; j++) {
            let text = possibleChar.charAt(Math.random() * possibleChar.length)
            arrNested2d[i].push([text])
        }
    }
    return arrNested2d
}

console.log(createNestedArr(5, 3))
