let peomsParvinArr = ["که هر که در صف باغ است صاحب هنریست"]


function Poems(){
	let createObjects = document.querySelector('#createObjects').value;
	let ListObjects = document.querySelector('#ListObjects');
	let peomsParvin = createObjects;
	console.log(peomsParvin);
	if (peomsParvin.search("سحر")) {
		
		ListObjects.innerHTML = "که هر که در صف باغ است صاحب هنریست"
	}
}




