new Swiper('.reviews-slider', {
	loop: true,
	slidesPerView: 1,
	breakpoints: {
		375: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		425: {
			slidesPerView: 1,		
			spaceBetween: 10,
		},
		768: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		990: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
	},
	navigation: {
		nextEl: '.custom-next',
		prevEl: '.custom-prev',
	},
})

document.querySelectorAll('.accordion__tap').forEach(function (tap) {
	tap.addEventListener('click', function () {
		const accordionItem = this.parentElement

		accordionItem.classList.toggle('active')
	})
})

document.querySelectorAll('.faq__question').forEach(function (faq) {
	faq.addEventListener('click', function () {
		const faqItem = this.parentElement
		faqItem.classList.toggle('active')
	})
})
