console.log('---using function---')
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


console.log('\n---using class---')
class CreateNestedArr {
    constructor(row, col){
        this.row = row
        this.col = col
        this.alpha = 'abcdefghijklmnopqrstuvwxyz'
    }
    randomAlpha(){
        let random = Math.floor(Math.random()*26)
        return this.alpha[random]
    }
    printBoard(){
        let nestedArr=[]
        for(let i = 0; i<this.row; i++){
            let arr =[]
            for(let j=0; j<this.col; j++){
                arr.push(this.randomAlpha())
            }
            nestedArr.push(arr)
        }
        return nestedArr       
    }
}

let nestedArr = new CreateNestedArr(5,4)
console.log(nestedArr.printBoard())