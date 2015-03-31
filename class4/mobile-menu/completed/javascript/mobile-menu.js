$(document).ready(function() {

  $('#js-menu-icon').click( function(element) {
    element.preventDefault();
    $('#js-site-menu').toggleClass("expanded");
  });

});
