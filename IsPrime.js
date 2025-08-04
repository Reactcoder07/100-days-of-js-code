// function isPrime (number){

// 	if(number < 2)
// 		return false
	
// 	for(var i = 2; i<number;i++){
// 			if(number%i==0)
// 			return `${number} is not prime `
		
// 	}
// 	return `${number} is prime `
// 		}


// console.log(isPrime(12))


const array = [2,4,2,3,5,7,5,7,8,9];


const str = "pradipappasahebKlage"


const result = str.split('')

// const result = [...new Set(array)]

// console.log(result)

// const result = array.filter((value, index)=> array.indexOf(value) !== index)
// console.log(result)


//find ocuurence 

const count = {}

for(let ele of result){

	if(count[ele])
	{
		count[ele] = count[ele] + 1
	}
	else{

		count[ele] =  1

	}
}

console.log(count)
