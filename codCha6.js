function threNum(a,b,c)
{
	var x=a+b+c;
	console.log(x/3)
}


// challenge 2

var lotsOfNums = [3,12,5,27,78,2]

function divBy3()
{	var divided = [];
	for(i = 0; i < lotsOfNums.length; i++)
		if (lotsOfNums[i]%3===0){
			divided.push(lotsOfNums[i])}
		console.log(divided)
}