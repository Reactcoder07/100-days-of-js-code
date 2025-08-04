

function findFactor(number)  {
	if(number<=0)
		return false

	for(var i=1; i<number;i++ ){

		if(number%i==0)
			console.log(i);
	}
}

findFactor(12)