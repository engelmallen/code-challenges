
var data = 
	[
	    {fname: "george", lname: "harrison"},
	    {fname: "paul", lname: "mccarthney"},
	    {fname: "ringo", lname: "starr"},
	    {fname: "john", lname: "lennon"}
	]


function printBeat()
{
	for (var i = 0; i < data.length; i++)
		{	
			 console.log(data[i].fname + " " + data[i].lname)
		}

}

function adding (num)
{
	var x = 0;
	for (var i = 0; i < num.length; i++)
		{
			x = x + i;
			console.log(x);
		}
}

adding ([1,2,3,4,5,6])
