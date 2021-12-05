function operation(){
	let numbersArr = ["-", "+", 2, 5, "D", "R"];
	let ListObjects = document.querySelector("#ListObjects");
	for(var i = 0; i <= numbersArr.length; i++){
		let TrueNumber = numbersArr[i];
		if(numbersArr[i] === 2){
			numbersArr.push(TrueNumber);
			ListObjects.innerHTML = numbersArr;
		}else if (numbersArr[i] === "+") {
			let sumArr = numbersArr[4] + numbersArr[5];
			numbersArr.push(sumArr);
		}else if (numbersArr[i] === "D") {
			let Dnumber = numbersArr[5] += numbersArr[5];
			numbersArr.push(Dnumber);
		}else if (numbersArr[i] === "R") {
			numbersArr.pop();
			console.log(numbersArr);

		}
		ListObjects.innerHTML = numbersArr;
		break;
	}
}
operation();





