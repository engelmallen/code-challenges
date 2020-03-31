// Coding challenge week 8 in class:
//Create 100 squares 
var container = document.getElementById("container")
function blues(){
		var lilBox = document.createElement("div");
		lilBox.classList.add("newBox");
		container.appendChild(lilBox);
		
}

function reds()
{
		var lolBox = document.createElement("div");
		lolBox.classList.add("niceBox");
		container.appendChild(lolBox);
}

function squareRain() {
for (i = 0; i<100; i++)
	{
		if (i%2==0){
		blues()
	}
			else{
				reds()
			}
	console.log("square was created");
	}
}squareRain()


