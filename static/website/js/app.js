$(document).ready(function(){
  function toggleDropdown (e) {
    var _d = $(e.target).closest('.dropdown'),
      _m = $('.dropdown-menu', _d);
    setTimeout(function(){
      var shouldOpen = e.type !== 'click' && _d.is(':hover');
      _m.toggleClass('show', shouldOpen);
      _d.toggleClass('show', shouldOpen);
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded', shouldOpen);
    }, e.type === 'mouseleave' ? 50 : 0);
  }
  
  $('body')
    .on('mouseenter mouseleave','.dropdown',toggleDropdown)
    .on('click', '.dropdown-menu a', toggleDropdown);
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