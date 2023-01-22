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

const popup = document.querySelector('.header__burger')
document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(popup);
 
	if ( ! withinBoundaries ) {
		menu.classList.remove('active')
		hamburger.classList.remove('active'); 
	}
})