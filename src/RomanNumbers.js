function romanNumbers(arabic) {

	if(arabic === 0){
		return "";
	}

	var numbersToRomans = [
		{ arabicNum: 1, romanNum: 'I' },
		{ arabicNum: 4, romanNum: 'IV' },
		{ arabicNum: 5, romanNum: 'V' },
		{ arabicNum: 9, romanNum: 'IX' },
		{ arabicNum: 10, romanNum: 'X' },
		{ arabicNum: 40, romanNum: 'XL' },
		{ arabicNum: 50, romanNum: 'L' },
		{ arabicNum: 90, romanNum: 'XC' },
		{ arabicNum: 100, romanNum: 'C' },
		{ arabicNum: 400, romanNum: 'CD' },
		{ arabicNum: 500, romanNum: 'D' },
		{ arabicNum: 900, romanNum: 'CM' },
		{ arabicNum: 1000, romanNum: 'M' }
	];

	for (var i = numbersToRomans.length - 1; i >= 0; i--) {
		var arabicNum = numbersToRomans[i].arabicNum;
		var romanNum = numbersToRomans[i].romanNum;

		if(arabic >= arabicNum)	{
			return romanNum + romanNumbers(arabic - arabicNum);
		}

	};
	
}