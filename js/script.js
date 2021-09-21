const imgContainer = document.getElementById('img-container')
const loader = document.getElementById('loader')
let photosArray = [];

/*Unsplash Api*/
const count = 30;
const apiKey = 'q2ArQe4T-thqXlg0lhz6kEFSlFBE12BUenVOrrR8Ft4'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function showPhotos() {
	photosArray.forEach((photo) => {
		const item = document.createElement('a');
		item.setAttribute('href', photo.links.html);
		item.setAttribute('target', '_blank');

		const img = document.createElement('img');
		img.setAttribute('src', photo.urls.regular);
		img.setAttribute('alt', photo.alt_description);
		img.setAttribute('title', photo.alt_description);

		item.appendChild(img);
		imgContainer.appendChild(item);

	});
}

async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		photosArray = await response.json();
		console.log(photosArray);
		showPhotos();
	} catch (error){
		console.log('Ошибка: ' + error)
	}
}

window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000) {
    getPhotos();
    console.log('load more');
  }
});


getPhotos();