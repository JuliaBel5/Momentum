let hamburger = document.querySelector('.header-menu');
let menu = document.querySelector('.burger__menu');
hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('active');
	menu.classList.toggle('active');
})

const link = document.querySelector('.burger-list')
document.addEventListener('click', (e) => {
	const linkClick = e.composedPath().includes(link);

	if (linkClick) {
		menu.classList.remove('active')
		hamburger.classList.remove('active');
	}
})

const popup = document.querySelector('main')
const popup2 = document.querySelector('footer')
document.addEventListener('click', (e) => {
	const withinBoundaries = e.composedPath().includes(popup);
	const withinBoundaries2 = e.composedPath().includes(popup2)

	if (withinBoundaries || withinBoundaries2) {
		menu.classList.remove('active')
		hamburger.classList.remove('active');
	}
})

let button1 = document.querySelector('.btn-1');
let button12 = document.querySelector('.btn-12');
let button13 = document.querySelector('.btn-13');
let blur1 = document.querySelector('.service-item1');
let blur5 = document.querySelector('.service-item5');
let blur2 = document.querySelector('.service-item2');
let blur4 = document.querySelector('.service-item4');
let blur6 = document.querySelector('.service-item6');
let blur3 = document.querySelector('.service-item3');
let blurarr1 = [blur1, blur5];
let blurarr2 = [blur3];
let blurarr3 = [blur2, blur4, blur6];


button1.addEventListener('click', function () {
	if ((button12.classList.contains('active')) && (button13.classList.contains('active'))) {
		blurarr1.map((el) => { el.classList.toggle('active'); });
		blurarr3.map((el) => { el.classList.toggle('enabled'); });
		blurarr2.map((el) => { el.classList.toggle('enabled'); });
		button12.classList.toggle('active');
		button13.classList.toggle('active');
	} else if (button13.classList.contains('active')) {
		blurarr1.map((el) => { el.classList.toggle('active'); });
		blurarr1.map((el) => { el.classList.toggle('enabled'); });
		button1.classList.toggle('active');
	} else if (button12.classList.contains('active')) {
		blurarr1.map((el) => { el.classList.toggle('active'); });
		blurarr1.map((el) => { el.classList.toggle('enabled'); });
		button1.classList.toggle('active');
	} else {
		blurarr1.map((el) => { el.classList.toggle('enabled'); });
		blurarr2.map((el) => { el.classList.toggle('active'); });
		blurarr3.map((el) => { el.classList.toggle('active'); });
		button1.classList.toggle('active');
	}
})


button12.addEventListener('click', function () {
	if (button1.classList.contains('active') && button13.classList.contains('active')) {
		blur3.classList.toggle('active');
		blurarr1.map((el) => { el.classList.toggle('enabled'); });
		blurarr3.map((el) => { el.classList.toggle('enabled'); });
		button1.classList.toggle('active');
		button13.classList.toggle('active');
	} else if (button13.classList.contains('active')) {
		blur3.classList.toggle('active');
		blur3.classList.toggle('enabled');
		button12.classList.toggle('active');
	} else if (button1.classList.contains('active')) {
		blur3.classList.toggle('active');
		blur3.classList.toggle('enabled');
		button12.classList.toggle('active');
	} else {
		blur3.classList.toggle('enabled');
		blurarr3.map((el) => { el.classList.toggle('active'); });
		blurarr1.map((el) => { el.classList.toggle('active'); });
		button12.classList.toggle('active');
	}
})

button13.addEventListener('click', function () {
	if (button12.classList.contains('active') && button1.classList.contains('active')) {
		blurarr3.map((el) => { el.classList.toggle('active'); });
		blurarr1.map((el) => { el.classList.toggle('enabled'); });
		blur3.classList.toggle('enabled');
		button12.classList.toggle('active');
		button1.classList.toggle('active');
	} else if (button12.classList.contains('active')) {
		blurarr3.map((el) => { el.classList.toggle('active'); });
		blurarr3.map((el) => { el.classList.toggle('enabled'); });
		button13.classList.toggle('active');
	} else if (button1.classList.contains('active')) {
		blurarr3.map((el) => { el.classList.toggle('active'); });
		blurarr3.map((el) => { el.classList.toggle('enabled'); });
		button13.classList.toggle('active');
	} else {
		blurarr3.map((el) => { el.classList.toggle('enabled'); });
		blurarr1.map((el) => { el.classList.toggle('active'); });
		blur3.classList.toggle('active');
		button13.classList.toggle('active');
	}
})

const ellipsys1 = document.querySelectorAll('.accordion-img1');
const ellipsys2 = document.querySelectorAll('.accordion-img2');
const ellipsys3 = document.querySelectorAll('.accordion-img3');
const pricesAcc1 = document.querySelector('.accordion__body1');
const pricesAcc2 = document.querySelector('.accordion__body2');
const pricesAcc3 = document.querySelector('.accordion__body3');
const buttonAcc = document.querySelectorAll('.accordion');
const pricesButtons = document.querySelector('.prices-buttons'); 

function classtoggle (name, i) {
	name[i].classList.toggle('active');}
 
 

  ellipsys1[0].addEventListener('click', ()  => {
    if (pricesAcc2.classList.contains('active')) {
		pricesAcc2.classList.toggle('active');
		classtoggle (ellipsys2, 1);
		classtoggle (buttonAcc, 1);
		//ellipsys2[1].classList.toggle('active');
		//buttonAcc[1].classList.toggle('active');
		//ellipsys1[1].classList.toggle('active');
		classtoggle (ellipsys1, 1);
		pricesAcc1.classList.toggle('active');
		classtoggle (buttonAcc, 0);
		//buttonAcc[0].classList.toggle('active');
		
	} else if (pricesAcc3.classList.contains('active')) {
		pricesAcc3.classList.toggle('active');
		classtoggle (ellipsys1, 1);
		//ellipsys1[1].classList.toggle('active');
		pricesAcc1.classList.toggle('active');
		classtoggle (buttonAcc, 0);
		//buttonAcc[0].classList.toggle('active');
		ellipsys3[1].classList.toggle('active');
		buttonAcc[2].classList.toggle('active');
		
	} else {
	classtoggle (ellipsys1, 1);
	classtoggle (buttonAcc, 0);
	//ellipsys1[1].classList.toggle('active');
	pricesAcc1.classList.toggle('active');
	//buttonAcc[0].classList.toggle('active');
	pricesButtons.classList.toggle('active')
	}
  })
 
  ellipsys2[0].addEventListener('click', ()  => {
	if (pricesAcc1.classList.contains('active')) {
		pricesAcc1.classList.toggle('active');
		//ellipsys1[1].classList.toggle('active');
		classtoggle (ellipsys1, 1);
		classtoggle (buttonAcc, 0);
		//buttonAcc[0].classList.toggle('active');
		classtoggle (ellipsys2, 1);
		classtoggle (buttonAcc, 1);
		//ellipsys2[1].classList.toggle('active');
		//buttonAcc[1].classList.toggle('active');
	pricesAcc2.classList.toggle('active');
	
	} else if (pricesAcc3.classList.contains('active')) {
	pricesAcc3.classList.toggle('active');
	classtoggle (ellipsys2, 1);
	classtoggle (ellipsys3, 1);
	//ellipsys2[1].classList.toggle('active');
	//ellipsys3[1].classList.toggle('active');
	pricesAcc2.classList.toggle('active');
	classtoggle (buttonAcc, 1);
	classtoggle (buttonAcc, 2);
	//buttonAcc[2].classList.toggle('active');
	//buttonAcc[1].classList.toggle('active');
	} else {
		classtoggle (ellipsys2, 1);
		classtoggle (buttonAcc, 1);
//	ellipsys2[1].classList.toggle('active');
//	buttonAcc[1].classList.toggle('active');
	pricesAcc2.classList.toggle('active');
	pricesButtons.classList.toggle('active');

	}
	
})
ellipsys3[0].addEventListener('click', ()  => {
	if (pricesAcc1.classList.contains('active')) {
		pricesAcc1.classList.toggle('active');
		classtoggle (ellipsys1, 1);
		classtoggle (buttonAcc, 0);
		classtoggle (ellipsys3, 1);
		classtoggle (buttonAcc, 2);
		//ellipsys1[1].classList.toggle('active');
		//buttonAcc[0].classList.toggle('active');
		//ellipsys3[1].classList.toggle('active');
		pricesAcc3.classList.toggle('active');
		//buttonAcc[2].classList.toggle('active');
	} else if (pricesAcc2.classList.contains('active')) {
		classtoggle (ellipsys2, 1);
		classtoggle (buttonAcc, 1);
		classtoggle (ellipsys3, 1);
		classtoggle (buttonAcc, 2);
	pricesAcc2.classList.toggle('active');
	//ellipsys2[1].classList.toggle('active');
	//ellipsys3[1].classList.toggle('active');
	pricesAcc3.classList.toggle('active');
	//buttonAcc[2].classList.toggle('active');
	//buttonAcc[1].classList.toggle('active');
	
} else {
	classtoggle (ellipsys3, 1);
	classtoggle (buttonAcc, 2);
	//ellipsys3[1].classList.toggle('active');
	pricesAcc3.classList.toggle('active');
	//buttonAcc[2].classList.toggle('active');
	pricesButtons.classList.toggle('active');
	}
})


ellipsys1[1].addEventListener('click', ()  => {
	classtoggle (ellipsys1, 1);
	classtoggle (buttonAcc, 0);
	//ellipsys1[1].classList.toggle('active');
	 pricesAcc1.classList.toggle('active');
	 //buttonAcc[0].classList.toggle('active');
	 pricesButtons.classList.toggle('active')
   })
   ellipsys2[1].addEventListener('click', ()  => {
	classtoggle (ellipsys2, 1);
	classtoggle (buttonAcc, 1);
	// ellipsys2[1].classList.toggle('active');
	 pricesAcc2.classList.toggle('active');
	// buttonAcc[1].classList.toggle('active');
	 pricesButtons.classList.toggle('active')
 })
 ellipsys3[1].addEventListener('click', ()  => {
	classtoggle (ellipsys3, 1);
	classtoggle (buttonAcc, 2);
	// ellipsys3[1].classList.toggle('active');
	 pricesAcc3.classList.toggle('active');
	//  buttonAcc[2].classList.toggle('active');
	 pricesButtons.classList.toggle('active')
 })
 
 const select = document.querySelector('.contacts-img');
 const selectCont = document.querySelector('.contacts-accordion-content');
 const city = document.querySelectorAll('.city');
 const contacts = document.querySelector('.contacts-accordion-button');
 const cityArr = Array.from(city);
 const cityName = document.querySelector('.city-name');
 const panel =  document.querySelectorAll('.panel');
 const panelArr = Array.from(panel);
 const woman768 = document.querySelector('.woman768');

 function hide () {
	select.classList.toggle('active');
	selectCont.classList.toggle('active');
	contacts.classList.add('green');
 }
 function toggle (i) {
	panelArr[i].classList.toggle('active');
 }

 function woman () {
	woman768.classList.toggle('active')
 }
 
 
 select.addEventListener('click', ()  => {
	hide();
	
	for (let i=0; i < panelArr.length; i++) {
		if (panelArr[i].classList.contains('active')) {
		toggle(i), cityName.innerHTML = 'City', woman ()} };
	
	
	
 })
cityArr[0].addEventListener('click', ()  => {
	hide ();
	toggle(0);
	woman ();
	cityName.innerHTML = 'Canandaigua, NY';
		
 })
 cityArr[1].addEventListener('click', ()  => {
	hide ();
	toggle(1);
	woman ();
	cityName.innerHTML = 'New York City';
 })

 cityArr[2].addEventListener('click', ()  => {
	hide ();
	toggle(2);
	woman ();
	cityName.innerHTML = 'Yonkers, NY';
	
 })

 cityArr[3].addEventListener('click', ()  => {
	hide ();
	toggle(3);
	woman ();
	cityName.innerHTML = 'Sherrill, NY';

 })
