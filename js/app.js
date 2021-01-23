/** @format */

let strategicHrSupport = document.querySelector('.strategic-hr-support');
let hrOperationSupport = document.querySelector('.hr-operation-support');
let hoverCard1 = document.querySelector('.hover-card-1');
let hoverCard2 = document.querySelector('.hover-card-2');
let s1 = document.querySelector('.our-process .s1');
let s2 = document.querySelector('.our-process .s2');
let s3 = document.querySelector('.our-process .s3');
let s4 = document.querySelector('.our-process .s4');
let s5 = document.querySelector('.our-process .s5');
let c1 = document.querySelector('.our-process .c1');
let c2 = document.querySelector('.our-process .c2');
let c3 = document.querySelector('.our-process .c3');
let c4 = document.querySelector('.our-process .c4');
let c5 = document.querySelector('.our-process .c5');

console.log(s4, c4);

strategicHrSupport.addEventListener('mouseover', () => {
	hoverCard1.classList.add('show');
});

strategicHrSupport.addEventListener('mouseleave', () => {
	hoverCard1.classList.remove('show');
});

hrOperationSupport.addEventListener('mouseover', () => {
	hoverCard2.classList.add('show');
});

hrOperationSupport.addEventListener('mouseleave', () => {
	hoverCard2.classList.remove('show');
});

// five-step-process-cards function
function showFiveStepCards() {
	s1.addEventListener('mouseover', () => {
		c1.classList.add('show');
	});

	s1.addEventListener('mouseleave', () => {
		c1.classList.remove('show');
	});

	s2.addEventListener('mouseover', () => {
		c2.classList.add('show');
	});

	s2.addEventListener('mouseleave', () => {
		c2.classList.remove('show');
	});

	s3.addEventListener('mouseover', () => {
		c3.classList.add('show');
	});

	s3.addEventListener('mouseleave', () => {
		c3.classList.remove('show');
	});

	s4.addEventListener('mouseover', () => {
		c4.classList.add('show');
	});

	s4.addEventListener('mouseleave', () => {
		c4.classList.remove('show');
	});

	s5.addEventListener('mouseover', () => {
		c5.classList.add('show');
	});

	s5.addEventListener('mouseleave', () => {
		c5.classList.remove('show');
	});
}

showFiveStepCards();

// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides((slideIndex += n));
}

function currentSlide(n) {
	showSlides((slideIndex = n));
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('mySlides');
	var dots = document.getElementsByClassName('dot');
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}
	slides[slideIndex - 1].style.display = 'block';
	dots[slideIndex - 1].className += ' active';
}
