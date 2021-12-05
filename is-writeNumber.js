let numbers ={};
console.log(numbers);
function createObjectBtn(){
	let input =  document.querySelector('#createObjects').value;	
	for(var i = 0; i <= input.length; i++){
		console.log(input[i]);
		numbers[input[i]] = input[i];
		console.log(numbers);
		if (numbers[input[i]] === numbers[input[i]]) {
			numbers[input[i]] +=  numbers[input[i]];
		}


		let listObject = document.querySelector('#ListObjects');

	}

}

