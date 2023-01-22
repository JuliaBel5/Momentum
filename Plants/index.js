let hamburger = document.querySelector('.header-menu');
let menu = document.querySelector('.burger__menu');
hamburger.addEventListener('click', function(){
	hamburger.classList.toggle('active');
        menu.classList.toggle('active');
})

const link = document.querySelector('.burger-list')
document.addEventListener( 'click', (e) => {
	const linkClick = e.composedPath().includes(link);
 
	if ( linkClick ) {
		menu.classList.remove('active')
		hamburger.classList.remove('active'); 
	}
})

const popup = document.querySelector('main')
const popup2 = document.querySelector('footer')
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(popup);
	const withinBoundaries2 = e.composedPath().includes(popup2)
 
	if ( withinBoundaries || withinBoundaries2 ) {
		menu.classList.remove('active')
		hamburger.classList.remove('active'); 
	}
})