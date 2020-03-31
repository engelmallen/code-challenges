// I need to get rid of the "/static/" and have as a final result an array that contains
// files only in this format => "image1.jpg"

let images = 
	["/static/image1.jpg", "/static/image2.jpg", "/static/image3.jpg", "/static/image4.jpg",
	 "/static/image5.jpg", "/static/image6.jpg", "/static/image7.jpg", "/static/image8.jpg",
	 "/static/image9.jpg", "/static/image10.jpg", "/static/image11.jpg", "/static/image12.jpg"
	]


let changer = []

images.forEach( function(a)
	{changer.push(a)} 
	)

images = []

changer.forEach(function(b)
{
	b = b.split("/static/")
	if(b!=0){
		b.shift()
		images.push(b)}
		// console.log(b)
}
)

console.log(images)

// function killStatic(thisVar)
// {
// 	thisVar.forEach(function(x)
// 			{
// 			x = x.split("/static/")
// 			x = x.shift()
// 			}
// 		)
// 	console.log(thisVar)
// }

 killStatic(images)

console.log(images)