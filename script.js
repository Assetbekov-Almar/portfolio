const mainNavigation = document.querySelector('.main-navigation'),
	  mainNaivgationLinks = [...mainNavigation.querySelectorAll('.main-nav-link')]


// function buildMailto(recipient, subject, body) {
// 	var mailToLink = "mailto:" + recipient + "?";
// 	var mailContent = "Subject=" + subject + "&";
// 	mailContent += "cc=testemail@gmail.com&";
// 	mailContent += "body="
// 	mailContent += encodeURIComponent(body);
// 	document.getElementById('myLink').addEventListener('click', function () {
// 		window.location.href = mailToLink + mailContent;
// 		return false;
// 	});
// }

// buildMailto('almar.asetbekov@gmail.com', 'a subject', 'mail content')


$('.submit').on("click", function(e) {
	e.preventDefault()
	let subject = $('#email').val(),
		body = $('#body').val()
	window.location.href = "mailto:almar.asetbekov@gmail.com?subject=" + subject + "&body=" + body
})