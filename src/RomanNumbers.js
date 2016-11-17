function romanNumbers(arabic) {

	var anomolies = {
		4: 'IV',
		9: 'IX'
	};

	var numbersToRomans = {
		1: 'I',
		5: 'V',
		10: 'X',
		40: 'XL'
	};

	if(arabic === 0){
		return "";
	}

	if(anomolies[arabic]){
		return anomolies[arabic];
	}

	if(numbersToRomans[arabic]){
		return numbersToRomans[arabic];
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

	if(arabic > 1){
		return 'I' + romanNumbers(arabic - 1);
	}
}