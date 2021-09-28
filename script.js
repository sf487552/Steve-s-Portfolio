$('nav a').click(function() {
  $('.container').hide();
  $(this.getAttribute('href')).show()
});
