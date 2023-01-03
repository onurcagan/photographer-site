import Image from 'next/image'
import { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

export function Carousel({ slides }: { slides: { image: string }[] }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h1 className="p-4 text-2xl font-bold text-center">Gallery</h1>
      <div>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={`ease-in duration-1000 ${index === current ? 'opacity-[1]' : 'opacity-0'}`}>
              <div className="relative flex justify-center p-4">
                <FaArrowCircleLeft
                  size={50}
                  className="absolute top-[50%] left-[30px] text-white/70 z-[3] cursor-pointer"
                  onClick={() => prevSlide()}
                />
                {index === current && <Image src={slide.image} width="1440" height="660" alt="" style={{ objectFit: 'cover' }} />}
                <FaArrowCircleRight
                  size={50}
                  className="absolute top-[50%] right-[30px] text-white/70 z-[3] cursor-pointer"
                  onClick={() => nextSlide()}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
