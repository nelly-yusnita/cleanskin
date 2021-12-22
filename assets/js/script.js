// ===== SHOW MENU ===== //
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () =>{
	navMenu.classList.toggle('show-menu');
	menuButton.classList.toggle('close-menu')
})
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')

	navMenu.classList.remove('show-menu')
	menuButton.classList.remove('close-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

/* ===== SCROLL SECTIONS ACTIVE LINK ===== */
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id')

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}
window.addEventListener('scroll', scrollActive);
// ===== end scroll sections active link ===== //

// ===== CHANGE BACKGROUND HEADER ===== //
function scrollHeader(){
	const header = document.getElementById('header');

	if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
// ===== end change background header ===== //

// ===== HOME SLIDE SHOW ===== //
const homeSwiper = new Swiper(".home__container", {
	spaceBetween: 30,
	effect: "fade",

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});
// ===== end home slide show ===== //

// ===== SPONSOR ===== //
const gallerySwiper = new Swiper(".sponsor__swiper", {
	spaceBetween: 0,
	loop: 'true',
	grabCursor: true,

	autoplay: {
		delay: 4500,
		disableOnInteraction: false,
	},

	breakpoints: {
		320: {
			slidesPerView: 3,
		},
		568: {
			slidesPerView: 5,
		},
		1024: {
			slidesPerView: 6,
		},
	},
})
// ===== end sponsor ===== //

// ===== TESTIMONIAL ===== //
const testimonialSwiper = new Swiper(".testimonial__container", {
	slidesPerView: 1,
	loop: true,
	grabCursor: true,

	autoplay: {
		delay: 9000,
		disableOnInteraction: false,
	},
});
// ===== end testimonial ===== //

// ===== SHOW SCROLL UP ===== //
function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	
	if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);
// ===== end show scroll up ===== //

// ===== AOS ANIMATE ===== //
const sectionTitle = document.querySelectorAll('.section-title');
sectionTitle.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

const fiturBox = document.querySelectorAll('.fitur__box');
fiturBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

const productBox = document.querySelectorAll('.product__box');
productBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

const newBox = document.querySelectorAll('.new__box');
newBox.forEach((n, i) => {
	n.dataset.aos = 'fade-down';
	n.dataset.aosDelay = i * 100;
});

AOS.init({
	duration: 1500,
	once: true,  
});
// ===== end animate ===== //