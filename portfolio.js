const portfolio = document.querySelector('.portfolio'),
      portfolioItemBg = [...portfolio.querySelectorAll('.wrapper__item-bg')],
 	  touchScreensMediaQuery = window.matchMedia("(max-width: 768px)")

if (touchScreensMediaQuery.matches) {
	portfolioItemBg.forEach(itemBg => {
		itemBg.addEventListener('touchstart', function(e) {
			portfolioItemBg.forEach(item => {
				item.querySelector('.icons-wrapper').style.display = 'none'
				item.querySelector('.links-wrapper').style.display = 'none'
			})
			this.querySelector('.icons-wrapper').style.display = 'block'
			this.querySelector('.links-wrapper').style.display = 'block'
		})
		return false
	})

	window.addEventListener('touchstart', function(e) {
		portfolioItemBg.forEach(item => {
			if (e.target.classList.contains('wrapper__item-bg') || e.target.tagName.toLowerCase() === 'a') return
			item.querySelector('.icons-wrapper').style.display = 'none'
			item.querySelector('.links-wrapper').style.display = 'none'
		})
	})
}

const formsWrapper = document.querySelector('.forms-wrapper'),
	formsSlides = [...(formsWrapper.children)],
	formsSlidesWidth = formsSlides[0].getBoundingClientRect().width,
	foprmsPreviousSlideBtn = document.querySelector('.previous-slide-btn'),
	formsNextSlideBtn = document.querySelector('.next-slide-btn')

formsSlides.forEach((slide, index) => {
	slide.style.left = formsSlidesWidth * index + 'px'
})

function moveToSlide(currentSlide, targetSlide) {
	if (formsSlides.indexOf(targetSlide) === formsSlides.length - 1)
		formsNextSlideBtn.classList.add('hidden-slide-btn')
	else if (formsSlides.indexOf(targetSlide) === 0)
		foprmsPreviousSlideBtn.classList.add('hidden-slide-btn')
	else {
		formsNextSlideBtn.classList.remove('hidden-slide-btn')
		foprmsPreviousSlideBtn.classList.remove('hidden-slide-btn')
	}

	formsWrapper.style.transform = 'translateX(-' + targetSlide.style.left + ')'
	currentSlide.classList.remove('current-slide')
	targetSlide.classList.add('current-slide')
}

formsNextSlideBtn.addEventListener('click', function () {
	const currentSlide = formsWrapper.querySelector('.current-slide'),
		nextSlide = currentSlide.nextElementSibling
	moveToSlide(currentSlide, nextSlide)
})

foprmsPreviousSlideBtn.addEventListener('click', function () {
	const currentSlide = formsWrapper.querySelector('.current-slide'),
		previousSlide = currentSlide.previousElementSibling
	moveToSlide(currentSlide, previousSlide)
})



