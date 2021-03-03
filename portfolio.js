const portfolio = document.querySelector('.portfolio'),
      portfolioItemBg = [...portfolio.querySelectorAll('.wrapper__item-bg')],
	  portfolioEvents = ['touchstart', 'click']

portfolioItemBg.forEach(itemBg => {
	portfolioEvents.forEach(event => {
		itemBg.addEventListener(event, function(e) {
			e.preventDefault()
			portfolioItemBg.forEach(item => {
				item.querySelector('.icons-wrapper').style.display = 'none'
				item.querySelector('.links-wrapper').style.display = 'none'
			})
			this.querySelector('.icons-wrapper').style.display = 'block'
			this.querySelector('.links-wrapper').style.display = 'block'
		})
	})
})