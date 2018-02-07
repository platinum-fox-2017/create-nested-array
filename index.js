//Release 0

let createNestedArr = (jumlahRow, jumlahCol) => {
    let outside =[];
    let inside =[];
    let random_alphabet = () => {
        let alpahabet = 'abcdefghijklmnopqrstuvwxyz';
        random =Math.floor((Math.random() * 25) + 0);
        return alpahabet[random];
    }
    for(let i=0; i<jumlahRow; i++){
        outside.push(inside);
        for(let j=0; j<jumlahCol; j++){
            outside[i].push(random_alphabet());
        }
        inside=[];
    }
    console.log (outside);
}

createNestedArr(5,3);
createNestedArr(4,2);