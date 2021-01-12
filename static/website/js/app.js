$(document).ready(function(){
  $('.masterclass-carousel').owlCarousel({
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      768: {
        items: 4
      }
    }
  });
})

var $navBar = $('nav.navbar')

window.onscroll = checkScrollPosition
window.onload = checkScrollPosition

function checkScrollPosition() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    $navBar.addClass('with-bg')
  } else {
    $navBar.removeClass('with-bg')
  }
}