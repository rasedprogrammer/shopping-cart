function getTextElementValueById(elementId) {
	const phoneTotalElement = document.getElementById(elementId);
	const currentTotalString = phoneTotalElement.innerText;
	const currentTotal = parseInt(currentTotalString);
	return currentTotal;
}
function setTextElementValueId(elementId, value) {
	const subTotalElement = document.getElementById(elementId);
	subTotalElement.innerText = value;
}
function calculateSubTotal() {
	const currentPhoneTotal = getTextElementValueById("phone-total");
	const currentCaseTotal = getTextElementValueById("case-total");

	const currentSubTotal = currentPhoneTotal + currentCaseTotal;
	// const subTotalElement = document.getElementById("sub-total");
	// subTotalElement.innerText = currentSubTotal;
	setTextElementValueId("sub-total", currentSubTotal);

	const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
	const taxAmount = parseFloat(taxAmountString);
	setTextElementValueId("tax-amount", taxAmount);

	const totalAmount = currentSubTotal + taxAmount;
	setTextElementValueId("final-total", totalAmount);
}
