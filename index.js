const createNestedArr = (jumlaRow, jumlahCol)=>{
    let nestedArr=[]
    let alpha ='abcdefghijklmnopqrstuvwxyz'
    for(let i=0; i<jumlaRow; i++){
        let arr=[]
        for (let j=0; j<jumlahCol; j++){
            let random = Math.floor(Math.random()*26)
            arr.push(alpha[random])
        }
        nestedArr.push(arr)
    }
    return nestedArr
}

console.log(createNestedArr(5,3))
console.log(createNestedArr(4,2))