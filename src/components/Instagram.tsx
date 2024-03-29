import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { InstagramData } from '../data/InstagramData'
import InstagramImg from './InstagramImg'

const Instagram = () => {
  return (
    <div className="max-w-[1440px] flex flex-col md:h-screen items-center justify-center mx-auto text-center pt-16 pb-2 md:pb-32 lg:mt-32 px-2 text-gray-300">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <div className="flex flex-row items-center justify-center">
        <FaInstagram />
        <p className="pl-1">Blanc Photography</p>
      </div>
      {/* Spacer */}
      <div className="pb-6 md:pb-12" />
      <div className="grid grid-cols-2 gap-2 md:px-48 md:grid-cols-3">
        {InstagramData.map((e, i) => {
          return <InstagramImg key={i} socialImg={e.image} />
        })}
      </div>
    </div>
  )
}

export default Instagram
