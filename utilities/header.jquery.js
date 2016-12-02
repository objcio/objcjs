// DEPENDENCIES
// * https://github.com/WickyNilliams/headroom.js

(function($) {
  $(function() {
    $(".js-header").headroom({
      offset: 100,
      tolerance: {
        down: 10,
        up:   100
      }
    });
  });
})(jQuery);
