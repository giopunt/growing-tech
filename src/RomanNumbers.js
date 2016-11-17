function romanNumbers(arabic) {

	var anomolies = {
		4: 'IV',
		9: 'IX'
	};

	var numbersToRomans = [
		{ arabicNum: 1, romanNum: 'I' },
		{ arabicNum: 5, romanNum: 'V' },
		{ arabicNum: 10, romanNum: 'X' },
		{ arabicNum: 40, romanNum: 'XL' }
	];

	if(arabic === 0){
		return "";
	}

	if(anomolies[arabic]){
		return anomolies[arabic];
	}

	for (var i = numbersToRomans.length - 1; i >= 0; i--) {
		var arabicNum = numbersToRomans[i].arabicNum;
		var romanNum = numbersToRomans[i].romanNum;

		if(arabic === arabicNum)	{
			return romanNum;
		}
		if(arabic > arabicNum)	{
			return romanNum + romanNumbers(arabic - arabicNum);
		}

	};
	
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