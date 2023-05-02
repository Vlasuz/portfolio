let portfolioItem 	= document.querySelectorAll('.portfolio__item')
let popupsItem 		= document.querySelectorAll('.popups .popup')
let popupsClose 	= document.querySelectorAll('.popups .popup__close, .popups .popup__bgd')

portfolioItem.forEach((item, itemNum) => {

	item.addEventListener('mousemove', function() {
		portfolioItem.forEach((item2) => {
			item2.style.opacity = '0.5'
		})
		this.style.opacity = '1'
	})

	item.addEventListener('mouseleave', function() {
		portfolioItem.forEach((item2) => {
			item2.style.opacity = '1'
		})
	})

	item.addEventListener('click', function(e, w) {
		popupsItem[itemNum].classList.add('popup_active')
	})

})

popupsClose.forEach((close) => {
	close.addEventListener('click', () => {
		for( let popupItemLi of popupsItem ){
			popupItemLi.classList.remove('popup_active')
		}
	})
})





























