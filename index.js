class nestedArray{
    constructor(){
        this.array = []
        this.kamusAlphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    }

    randomAlphabet(){
        return this.kamusAlphabet[Math.floor(Math.random()*this.kamusAlphabet.length)]
    }

    nestedArray(p,l){
        
        for(let i = 0; i < p; i++){
            let array = []
            for(let j = 0; j < l; j++){
                array.push(this.randomAlphabet())
            }
            this.array.push(array)
        }
        return this.array
    }

}

let soal1 = new nestedArray()
console.log(soal1.nestedArray(3,5))