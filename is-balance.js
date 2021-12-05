
let balances = ["()", "{}", "({})", "[]", "(){}[]", "[{()}]", "(())()", "(({}))"	];
let btn = document.querySelector('#btnClick');
console.log(balances);
function Balance(){
	let inputs = document.querySelector('#balance').value;
	let messagebalance = document.querySelector('#message-balance');
	console.log(inputs);
	for(var i = 0 ;i <= balances.length; i++ ){
			if (balances[i] === inputs) {
			let Elements = document.createElement('div');
			Elements.className = "alert alert-success mt-3";
			Elements.textContent = "text is balance";
			messagebalance.append(Elements);

		}else{
			let ElementsAlert = document.createElement('div');
			ElementsAlert.className = "alert alert-danger mt-3";
			messagebalance.append(ElementsAlert);
			ElementsAlert.textContent = "text is not balance";
		}
	}
}