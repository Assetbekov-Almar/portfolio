const burgerMenuElements = [...document.querySelectorAll('.burger-menu-element')],
      burgerMenuBtn = document.querySelector('.header-burger-menu'),
      burgerMenuEvents = ['click', 'touchstart'],
      burgerMenuNavbarBg = document.querySelector('.header-burger-navbar-bg')

burgerMenuEvents.forEach(event => {
	burgerMenuBtn.addEventListener(event, function(e) {
		e.preventDefault()
		burgerMenuElements.forEach(element => {
			element.classList.add('burger-menu-open')
		})
		this.style.display = "none"
	})
})

burgerMenuEvents.forEach(event => {
	burgerMenuNavbarBg.addEventListener(event, (e) => {
		e.preventDefault()
		burgerMenuElements.forEach(element => {
			element.classList.remove('burger-menu-open')
		})
		burgerMenuBtn.style.display = "block"
		
	})
})