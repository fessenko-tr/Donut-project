var $status = $('.paging-info');
var $slickElement = $('.reviews-list');
var $slickComment = $('.reviews-comments');

var scrollCount = null;
var scroll = null;

$slickComment.slick({
  slidesToShow: 1,
  infinite: false,
  arrows: false,
  initialSlide: 1,
  asNavFor: $slickElement,
});

$slickElement.slick({
  slidesToShow: 1,
  centerPadding: '190px',
  centerMode: true,
  infinite: false,
  arrows: false,
  initialSlide: 1,
  asNavFor: $slickComment,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        centerMode: false,
        centerPadding: '0px',
      },
    },
  ],
});

$slickElement.on('wheel', function (e) {
  e.preventDefault();

  clearTimeout(scroll);
  scroll = setTimeout(function () {
    scrollCount = 0;
  }, 200);
  if (scrollCount) return 0;
  scrollCount = 1;

  if (e.originalEvent.deltaY < 0) {
    $(this).slick('slickNext');
  } else {
    $(this).slick('slickPrev');
  }
});

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.on('edge', function () {
  $slickElement.slick('slickGoTo', 0);
});
