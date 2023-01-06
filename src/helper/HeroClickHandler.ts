import { NextRouter } from 'next/router'

export function handleClick(btn: string, router: NextRouter) {
  if (router.pathname === '/work') {
    let navbar = document.getElementById('navbar')
    navbar!.style.opacity = '0'
    navbar!.style.visibility = 'hidden'
    router.push('#work')
  }

  if (router.pathname === '/contact') {
    let navbar = document.getElementById('navbar')
    navbar!.style.opacity = '0'
    navbar!.style.visibility = 'hidden'
    router.push('#contact')
  }

  if (btn === 'Book') {
    alert("Currently overflowing with work, but I'd love to work with you in the future!")
  }

  return
}
