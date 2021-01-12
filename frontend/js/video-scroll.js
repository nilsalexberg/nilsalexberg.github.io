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