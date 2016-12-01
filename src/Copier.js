var Copier = function(source, destination) {
	this.copy = function(){
		var char = source.getChar();
		while(typeof char !== 'undefined' && char !== '\n'){
			destination.setChar(char);
			char = source.getChar();
		}
	};
};