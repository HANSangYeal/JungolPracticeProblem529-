function solve154() {
	var inputWei1 = getValueOfTags('weight1');
	var inputWei2 = getValueOfTags('weight2');
	var inputWei3 = getValueOfTags('weight3');		
	var inputWei4 = getValueOfTags('weight4');			
	var inputWei5 = getValueOfTags('weight5');			
	var inputWei6 = getValueOfTags('weight6');
		
	var inputWeis = [inputWei1, inputWei2, inputWei3, inputWei4, inputWei5, inputWei6];

	var addWei = 0;
		for (var i = 0; i <= 5; i++) {
			addWei = addWei + Number(inputWeis[i]);
		}
			
	var averageWei = division(addWei, inputWeis.length);

	var roundingWei = rounding(averageWei); 
			
	var answer = document.getElementById('result154').innerHTML = roundingWei;

}