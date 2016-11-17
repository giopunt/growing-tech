function romanNumbers(arabic) {

	var numberMap = {
		1: 'I',
		4: 'IV',
		5: 'V',
		9: 'IX',
		10: 'X',
		40: 'XL'
	};

	if(arabic === 0){
		return "";
	}

	if(numberMap[arabic]){
		return numberMap[arabic];
	}
	
	if(arabic > 40)	{
		return 'XL' + romanNumbers(arabic - 40);
	}
	
	if(arabic > 10)	{
		return 'X' + romanNumbers(arabic - 10);
	}

	if(arabic > 5){
		return 'V' + romanNumbers(arabic - 5);
	}

	return "I" + romanNumbers(arabic - 1);
}