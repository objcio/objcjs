(function ($) {

  $.scrollTo = function(element, duration) {
    var $element, distance, previous;
    if (duration == null) {
      duration = 1000;
    }
    $element = $(element);
    distance = $element.offset().top;

    if ($element.is(":hidden")) {
      previous = $element.prevAll(":visible:first");
      if (previous.length > 0) {
        distance = previous.offset().top + previous.outerHeight();
      } else {
        $element.closest(":visible").offset().top;
      }
    }

    $('html, body').animate({
      scrollTop: distance
    }, duration, function() {
      window.location.hash = $element.attr('id') || '';
    });
  };

})(jQuery);
