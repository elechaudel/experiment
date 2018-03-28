$('a[href^="#"]').on('click', function(event) {

  var target = $(this.getAttribute('href'));

  $('html, body').scrollTo(target, 1000);
});
