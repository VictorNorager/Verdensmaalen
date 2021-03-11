let images = [
	"./images/banner.JPG",
];

let i = 0;

function slider(){
	document.querySelector('header').style.backgroundImage = 'url(' + images[i] + ')';

	if(i < images.length -1){
		i++;
	}else{
		i = 0;
	}

	setTimeout('slider()', 6000);
}