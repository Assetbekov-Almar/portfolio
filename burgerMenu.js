const burgerMenuElements = [...document.querySelectorAll('.burger-menu-element')],
      burgerMenuBtn = document.querySelector('.header-burger-menu')

burgerMenuBtn.addEventListener('click touchstart', function () {
	burgerMenuElements.forEach(element => {
		element.classList.add('burger-menu-open')
	})
	this.style.display = "none"
})

window.addEventListener('click', (e) => {
	let modal = e.target
	if (modal.classList.contains('header-burger-navbar-bg')) {
		burgerMenuElements.forEach(element => {
			element.classList.remove('burger-menu-open')
		})
		burgerMenuBtn.style.display = "block"
	}
})