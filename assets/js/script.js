// ===== SHOW MENU ===== //
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close');

// Menu Show
if(navToggle){
	navToggle.addEventListener('click', () =>{
		navMenu.classList.add('show-menu')
	})
}

// Menu Hidden
if(navClose){
	navClose.addEventListener('click', () =>{
		navMenu.classList.remove('show-menu')
	})
}
// ===== end show menu ===== //

// ===== REMOVE MENU MOBILE ===== //
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
// ===== end remove menu mobile ===== //

// ====== SCROLL SECTIONS ACTIVE LINK ===== //
const sections = document.querySelectorAll('section[id]');

function scrollActive(){
	const scrollY = window.pageYOffset

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
		sectionTop = current.offsetTop - 58,
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
			slidesPerView: 7,
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

