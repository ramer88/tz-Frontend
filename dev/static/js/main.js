$(document).ready(function() {
  $('.tickbox').click(function() {
    $(this).find('.icon-tick').toggle();
  });
  $('.sandwich-menu').click(function() {
    $(this).toggleClass('active');
    $('ul.header-container__nav').toggle(900);
  });
  svg4everybody({});
});
