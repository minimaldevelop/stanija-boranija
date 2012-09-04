
function getGreenBeanImage(){
	var beanResources = ["http://4.bp.blogspot.com/_jpD_W7NH9LA/TKrW8RGgK0I/AAAAAAAAAAs/tnML6fPeYZo/s1600/boranija.jpg",
						 "http://www.turizamzavasinas.com/sr/images/2011/06/boranija1-640x372.jpg",
						 "http://delicious-cooks.com/data_images/recipes_01/fresh-green-beans/fresh-green-beans-09.jpg",
						 "http://delicious-cooks.com/data_images/recipes_01/fresh-green-beans/fresh-green-beans-03.jpg"]
						
	var randomBeanIndex = Math.floor((Math.random()*beanResources.length));					
						 
	return beanResources[randomBeanIndex];				 
}

window.onload = function(){
	// replace images
	var images = document.getElementsByTagName('img');
	
	for (var i = 0; i < images.length; i++) { 
	
		var img = images[i];

		if(	img.outerHTML != null &&
			img.outerHTML.toLowerCase().indexOf('stanija') != -1 ){
		
			var imageSrc = getGreenBeanImage();
			// source to image of the green bean (boranija)
			img.setAttribute('src', imageSrc);
		}
	}

	
	//replace stanija text
	var body = String(document.body.innerHTML).replace(/stanij/ig,"Boranij");
	document.body.innerHTML = body;

	
}