angular.
  module('phonecatApp').
  animation('.phone', function phoneAnimationFactory() {
    return {
      addClass: animateIn,
      removeClass: animateOut
    };

    function animateIn(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 500
        }).
        animate({
          left: 0
        }, done);

      return function animateInEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
    function animateOut(element, className, done) {
      if (className !== 'selected') return;

      element.
        css({
          position: 'absolute',
          top: 0,
          left: 0
        }).
        animate({
          left: -500
        }, done);

      return function animateOutEnd(wasCanceled) {
        if (wasCanceled) element.stop();
      };
    }
  });
