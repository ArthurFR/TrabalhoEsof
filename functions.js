
function verifyNumber(array,baseIn){
	var i;

	if(array == ' '){
		return (-1);
	}

	if(baseIn != 16){
		for(i = 0;i < array.length;i++){
			if(isNaN(array[i]) || Number(array[i]) < 0 || Number(array[i]) > baseIn-1)
				return (-1);
		}
	} else {

		for (i = 0; i < array.length;i++){
			if(!(array[i].match(/[A-F]/i)||(Number(array[i])>=0&&Number(array[i])<=9)))
				return (-1);
		}
	}

	return 1;
}
function convertTo10(number,baseIn){
	var i=0;
	var j;
	var digit = Array.from(number);
	var value = 0;
	j = digit.length - 1;

	while(i<digit.length){
		if(isNaN(digit[j])){
			switch(digit[j]){
				case 'A': { value += 10*Math.pow(baseIn,i); break }
        		case 'B': { value += 11*Math.pow(baseIn,i); break }
		        case 'C': { value += 12*Math.pow(baseIn,i); break }
		        case 'D': { value += 13*Math.pow(baseIn,i); break }
		        case 'E': { value += 14*Math.pow(baseIn,i); break }
		        case 'F': { value += 15*Math.pow(baseIn,i); break }
		        default: { value += digit[i]; break }
			}
		}else{
			value += digit[j]*Math.pow(baseIn,i);
		}
		i++
		j--;
	}
	return value;
}
function convertFrom10(number,baseOut){
	var i =0;
	var digit = new Array();
	var value = new Array();
	while (number != 0) {
      i++;
      digit[i] = number % baseOut;
      number = Math.floor(number / baseOut);
    }

    while (i >= 1) {
      switch (digit[i]) {
        case 10: { value += "A"; break }
        case 11: { value += "B"; break }
        case 12: { value += "C"; break }
        case 13: { value += "D"; break }
        case 14: { value += "E"; break }
        case 15: { value += "F"; break }
        default: { value += digit[i]; break }
      }
      i--;
    }
    return value;
}

module.exports = {
  verifyNumber,
  convertTo10,
  convertFrom10
};
