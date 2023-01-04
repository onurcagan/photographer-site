import { useRouter } from 'next/router'
import React, { ComponentProps, ComponentPropsWithoutRef } from 'react'

function Hero({ heading, message, btn }: { heading: string; message: string; btn: string }) {
  const router = useRouter()
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] -mt-12">
        <h2 className="text-4xl font-bold sm:text-5xl">{heading}</h2>
        <p className="py-5 sm:text-xl">{message}</p>
        <button
          onClick={() => {
            if (router.pathname === '/work') {
              router.push('#work')
            }

            if (router.pathname === '/contact') {
              router.push('#contact')
            }
            return
          }}
          className="px-8 py-2 border"
        >
          {btn}
        </button>
      </div>
    </div>
  )
}

export default Hero
