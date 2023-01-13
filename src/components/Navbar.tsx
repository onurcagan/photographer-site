import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { adjustNavbarOpacityOnScroll } from '../helper/adjustNavbarOpacityOnScroll'

export const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [bgColor, setBgColor] = useState('transparent')
  const [textColor, setTextColor] = useState('#BDBDBD')

  useEffect(() => {
    const changeColorAndHideNavbar = () => {
      if (window.scrollY >= 80) {
        setBgColor('#ffffff')
        setTextColor('#000000')
      } else {
        setBgColor('transparent')
        setTextColor('#BDBDBD')
      }
    }
    window.addEventListener('scroll', changeColorAndHideNavbar)
  }, [])

  adjustNavbarOpacityOnScroll(nav)

  return (
    <nav
      id='navbar'
      className='fixed top-0 left-0 z-10 w-full px-4 py-4 duration-300 ease-in border-gray-200 sm:px-6'
      style={{ backgroundColor: `${bgColor}` }}
    >
      {/* Main Div */}
      <div className='container flex flex-wrap items-center justify-between mx-auto'>
        <Link href='/' className='flex items-center'>
          <span
            className='self-center text-xl font-semibold whitespace-nowrap'
            style={{ color: `${textColor}` }}
          >
            C. Rick Blanc
          </span>
        </Link>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-default'
          aria-expanded='false'
          onClick={() => setNav(true)}
          style={{ color: `${textColor}` }}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul
            style={{ color: `${textColor}` }}
            className={`flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0`}
          >
            <li
              className={`${
                bgColor === 'transparent' ? 'hover:text-slate-200' : 'hover:text-black/60'
              }`}
            >
              <Link
                href='/'
                className='block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li
              className={`${
                bgColor === 'transparent' ? 'hover:text-slate-200' : 'hover:text-black/60'
              }`}
            >
              <Link
                href='/#gallery'
                className='block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0'
                onClick={() => {
                  let navbar = document.getElementById('navbar')
                  navbar!.style.opacity = '0'
                  navbar!.style.visibility = 'hidden'
                }}
              >
                Gallery
              </Link>
            </li>
            <li
              className={`${
                bgColor === 'transparent' ? 'hover:text-slate-200' : 'hover:text-black/60'
              }`}
            >
              <Link
                href='/work'
                className='block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0'
              >
                Work
              </Link>
            </li>
            <li
              className={`${
                bgColor === 'transparent' ? 'hover:text-slate-200' : 'hover:text-black/60'
              }`}
            >
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 md:hover:bg-transparent md:border-0 md:p-0'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Content */}
        <div
          className={`absolute inset-0 flex items-center justify-center w-full h-screen text-center duration-300 ease-in bg-black md:hidden ${
            nav ? 'left-0' : 'left-[-100%]'
          }`}
          id='navbar-default'
        >
          <div className='absolute top-4 right-4 p-2.5 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 '>
            <AiOutlineClose color='lightgray' size={'1.2rem'} onClick={() => setNav(false)} />
          </div>

          <ul className='flex flex-col gap-12 p-4 mt-4 text-4xl rounded-lg'>
            <li>
              <Link
                href='/'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                aria-current='page'
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='/#gallery'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                onClick={() => {
                  setNav(false)
                  let navbar = document.getElementById('navbar')
                  navbar!.style.opacity = '0'
                  navbar!.style.visibility = 'hidden'
                }}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                href='/work'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                onClick={() => setNav(false)}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'
                onClick={() => setNav(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
