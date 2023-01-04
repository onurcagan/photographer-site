import Image from 'next/image'
import { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { RxDotFilled } from 'react-icons/rx'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

export function Carousel({ slides }: { slides: { image: string }[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div id="gallery" className="flex flex-col items-center justify-center h-screen">
      <div className="pt-[100px]" />
      <h1 className="text-4xl text-center text-white">Gallery</h1>
      <div className="max-w-[1440px] h-[780px] w-full m-auto pt-12 pb-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
        ></div>
        {/* Left Arrow */}
        <div className="block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
          <MdOutlineArrowBackIos onClick={prevSlide} size={25} />
        </div>
        {/* Right Arrow */}
        <div className="block md:hidden md:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
          <MdOutlineArrowForwardIos onClick={nextSlide} size={25} />
        </div>
        <div className="flex justify-center py-2 top-4">
          {slides.map((s, slideIndex) => (
            <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className="text-2xl cursor-pointer">
              <RxDotFilled color="white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
