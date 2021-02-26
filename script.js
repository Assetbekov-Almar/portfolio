const mainNavigation = document.querySelector('.main-navigation'),
      mainNaivgationLink = mainNavigation.querySelector('.active-link')

$('.submit').on("click", function(e) {
    e.preventDefault()
    let subject = $('#email').val(),
        body = $('#body').val()
    window.location.href = "mailto:almar.asetbekov@gmail.com?subject=" + subject + "&body=" + body
})