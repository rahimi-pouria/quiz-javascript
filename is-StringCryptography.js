let Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"];


function createObjectBtn(){
	let input = document.querySelector('#Cryptography').value;
	let ListObjects = document.querySelector('#ListObjects');
	let names = Array.from(input);
	names.reverse();
	let saveIndex = names[0];
	let numberArray = names.length;
	let cutArray = Alphabet.slice(1 , numberArray);
	cutArray.unshift(saveIndex);
	ListObjects.innerHTML = cutArray;
}
