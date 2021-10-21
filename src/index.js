import './sass/main.scss';

$('.smooth').click(function () {
  var elementClick = $(this).attr('href');
  var destination = $(elementClick).offset().top;
  jQuery('html:not(:animated),body:not(:animated)').animate(
    {
      scrollTop: destination,
    },
    700,
  );
  return false;
});
