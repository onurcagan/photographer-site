/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaInstagram } from 'react-icons/fa'

const InstagramImg = ({ socialImg }: { socialImg: string }) => {
  return (
    <div className="relative">
      <img alt="instagram images" src={socialImg} className="w-full h-full" />
      {/* Overlay */}
      <div className="absolute inset-0 flex items-center justify-center hover:bg-black/70 group">
        <p>
          <FaInstagram size={30} className="hidden text-gray-300 group-hover:block" />
        </p>
      </div>
    </div>
  )
}

export default InstagramImg
