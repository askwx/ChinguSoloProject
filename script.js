
var Ease = {
  easeInOut: t => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1
}
 
// animation Duration 
var duration = 500;
 
window.addEventListener('DOMContentLoaded', () => {
 

  var smoothScrollTriggers = document.querySelectorAll('a[href^="#"]');
 
  smoothScrollTriggers.forEach(function (smoothScrollTrigger) {

    smoothScrollTrigger.addEventListener('click', function (e) {
 
      
      var href = smoothScrollTrigger.getAttribute('href');
 
      
      var currentPostion = document.documentElement.scrollTop || document.body.scrollTop;
 
      
      var targetElement = document.getElementById(href.replace('#', ''));

      if (targetElement) {
 

        e.preventDefault();
        e.stopPropagation();
 

        var targetPosition = window.pageYOffset + targetElement.getBoundingClientRect().top - 115; 
 

        var startTime = performance.now();

        var loop = function (nowTime) {
 
          var time = nowTime - startTime;
 
          var normalizedTime = time / duration;
 
          if (normalizedTime < 1) {
 

            window.scrollTo(0, currentPostion + ((targetPosition - currentPostion) * Ease.easeInOut(normalizedTime)));
 

            requestAnimationFrame(loop);
 

          } else {
            window.scrollTo(0, targetPosition);
          }
 
        }

        requestAnimationFrame(loop);
      }
    });
 
  });
 
});
scrollTop('js-scroll-top', 250); 

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; 
    let step = duration/currentY > 1 ? 10 : 100; 
    let timeStep = duration/currentY * step; 
    let intervalId = setInterval(scrollUp, timeStep);


    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); 
      } else {
          scrollBy( 0, -step );
      }
    }
  });
}