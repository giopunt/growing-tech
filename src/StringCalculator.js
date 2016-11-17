function add(input){
  var result = 0;
	if(input === ""){
  	return result;
  }

	var inputArray = input.split(",");
  for(var i = inputArray.length - 1; i >= 0; i-- ){
  	result = result + parseInt(inputArray[i]);
  }
	return result;
}