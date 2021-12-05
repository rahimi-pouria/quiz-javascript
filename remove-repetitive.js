let ListObjects = document.querySelector('#ListObjects');
function createObjectBtn(){
	let input = document.querySelector('#createObjects').value;
	let RemoveCharacter = Array.from(input);
	console.log(RemoveCharacter);
	let NumberObj = RemoveCharacter.filter((value, index, array) => { 
    return array.indexOf (value) == index;
	});
	console.log(NumberObj);
	ListObjects.innerHTML = NumberObj;
}
