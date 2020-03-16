// Week 6:
/*3. Write a function that takes an array of numbers as argument and lists in 
another array all numbers bigger than 10; if there are no numbers bigger than 
ten just console.log("no numbers bigger than 10");*/

// var arOfNums = 
// [2,5,/*32,54,1,12,87,*/6]

/*function ovTen()
{
	var checkNums = []
	for (var i = 0; i <= arOfNums.length; i++) {
		if (arOfNums[i]>9) {
			checkNums.push(arOfNums[i])
		}
	}
	if (!checkNums === 0){
		console.log(checkNums)
		} else {
				console.log("no numbers bigger than 10")
			}
}*/

// ovTen()

/*4. Write a function that takes a string as an argument and returns (console.logs) 
all the vowels in this string*/

/*function allVows (x)
{
	// x = "hello";
	x.split("");
	var vowels = [];
	for (var i = 0; i <=  x.length; i ++) 
		{
		if (x[i] == "a" || x[i] == "e" || x[i] == "i"  || x[i] == "o"  || x[i] == "u")
			{
				vowels.push(x[i])
			}
	} console.log(vowels)
}*/




/*5. Write a function that takes a string sentence as an argument and 
lists all the words that are longer than 5 characters in this sentence. 
IF there is no word longer than five characters console.log('very short words")*/

/*
function who(sentence)
{
	sentence = sentence.split(" ")
	var words = [];

	for(i = 0; i <= sentence.length; i ++) 
		{	
			if 	(sentence[i].length>=5)
				{
				words.push(sentence[i])
				}
		}

	// if (words==0) 
	// 	{
	// 		console.log('very short words')
	// 	}
	// 	else 	
	// 		{
				console.log(words)
			// }		
}*/





/*6. Write a function that lists all the numbers from 0 to 100; 
If a number is divisible by 3 console.log("Fizz"); 
if a number is divisible by 5, console.log("Buzz"); 
if a number is divisible by both 3 and 5 console.log("FizzBuzz")*/

/*function buzzing()
{
	for (i = 0; i <= 100; i++)
		{
			if (i%3==0 && i%5==0) {console.log(i+" FizzBuzz")}
			else if(i%3==0 && i%5!=0) {console.log(i+" Fizz")}
			else if(i%5==0 && i%3!=0) {console.log(i+" Buzz")}
		}
}
*/


// Week - Coronavirus the beginning

/*7. Create a function that takes in a string of multiple words and returns 
the first word with “ish” added to the end. Example:
ishFunc(“Soup is my favorite.“) -> “Soupish”*/

/*function addIsh(toIsh)
{
	toIsh = toIsh.split(" ");
	console.log(toIsh[0]+"ish");
}
*/



/*8. Write a function that takes and array of numbers and adds the sum of them.*/

/*function arNums([a,b,c,d,e,f,g])
{
	console.log(a+b+c+d+e+f+g)
}*/
			//or

arOfNums([6,7,8,9,11,13,23,34,111,234])

function arAdd(arNum)
{
	var sum = 0;
	for (var i = 0; i <= arNum.length; i++) 
		{
			sum += arNum[i]; 
		} 
	console.log(sum)
}



// 9. Write a function that takes a string argument and returns all the instances of vowels ex. -> “whatever” - returns “aee”
// 10. Create an array. Using the .forEach() method on the array, print each element to  the console. If you are unsure on how to use .forEach(), Google it.
// 11 Create a function that takes an array. Check to see if it contains a 5 or 6. If it does, return true, otherwise return false. Example:
// checkNums( [1, 3, 5, 12, 22] ) -> true
//checkNums( [30, 99, 8, 22, 7] ) -> false