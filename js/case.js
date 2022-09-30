function updateCaseNumber(isCaseIncrease) {
	const caseNumberField = document.getElementById("case-number-field");
	const caseNumberFieldString = caseNumberField.value;
	const previousCaseNumber = parseInt(caseNumberFieldString);

	let newCaseNumber;

	if (isCaseIncrease === true) {
		newCaseNumber = previousCaseNumber + 1;
	} else {
		newCaseNumber = previousCaseNumber - 1;
	}
	caseNumberField.value = newCaseNumber;
	return newCaseNumber;
}
function updateCaseTotalPrice(newCaseNumber) {
	const caseTotalPrice = newCaseNumber * 59;
	const caseTotalElement = document.getElementById("case-total");
	caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
	const newCaseNumber = updateCaseNumber(true);

	updateCaseTotalPrice(newCaseNumber);
	calculateSubTotal();
});
document
	.getElementById("btn-case-minus")
	.addEventListener("click", function () {
		const newCaseNumber = updateCaseNumber(false);

		updateCaseTotalPrice(newCaseNumber);
		calculateSubTotal();
	});

// document.getElementById('btn-case-plus').addEventListener('click', function (){
// 	const caseNumberField = document.getElementById('case-number-field');
// 	const caseNumberFieldString = caseNumberField.value;
// 	const previousCaseNumber = parseInt(caseNumberFieldString);

// 	const newCaseNumber = previousCaseNumber + 1;
// 	caseNumberField.value = newCaseNumber;
// })
// document.getElementById('btn-case-minus').addEventListener('click', function (){
// 	const caseNumberField = document.getElementById('case-number-field');
// 	const caseNumberFieldString = caseNumberField.value;
// 	const previousCaseNumber = parseInt(caseNumberFieldString);

// 	const newCaseNumber = previousCaseNumber - 1;
// 	caseNumberField.value = newCaseNumber;
// })
