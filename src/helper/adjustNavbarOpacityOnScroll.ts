export const adjustNavbarOpacityOnScroll = (nav: boolean) => {
  if (typeof window !== 'undefined') {
    let prevScrollPosition = window.pageYOffset
    window.onscroll = function () {
      let navbar = document.getElementById('navbar')
      let currentScrollPosition = window.pageYOffset
      if (prevScrollPosition < currentScrollPosition && !nav && currentScrollPosition >= 800) {
        navbar!.style.opacity = '0'
        navbar!.style.visibility = 'hidden'
      } else if (prevScrollPosition > currentScrollPosition) {
        navbar!.style.visibility = 'visible'
        navbar!.style.opacity = '1'
      }
      prevScrollPosition = currentScrollPosition
    }
  }
}
