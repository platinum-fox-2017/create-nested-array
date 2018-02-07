var char = 'abcdefghijklmnopqrstuvwxyz';

function createNestedArr(jumlahRow, jumlahCol) {
	var result = [];
	for (var i = 0; i < jumlahRow; i++) {
		var temp = [];
		for (var j = 0; j < jumlahCol; j++) {
			var randomIndex = Math.floor(Math.random() * 100) % 26;
			temp.push(char[randomIndex]);
		}
		result.push(temp);
	}
	return result;
}

console.log(createNestedArr(5,3));
console.log(createNestedArr(4,2));