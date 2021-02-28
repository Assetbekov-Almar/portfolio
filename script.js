const contactForm = document.querySelector('#contact-form'),
      contactFormMessage = contactForm.querySelector('.message')

contactFormMessage.addEventListener('change', function(e) {
		e.target.value.trim().length === 0 && alert("Please enter your message.")
})