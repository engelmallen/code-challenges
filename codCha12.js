var bigSquare = document.getElementById("bigSquare")
var butClick = document.getElementById("butClick")
var change = true;

butClick.addEventListener("click", function(){

	if (change === true)
		{
		butClick.value = "Oh, You clicked me!?"
		butClick.style.backgroundColor = "orange"	
		bigSquare.style.display = "block";		
		change = false
		}else
					{
						butClick.value = "Click Me"
						bigSquare.style.display = "none";
						butClick.style.backgroundColor = "green"		
						change = true
					}
}
	)