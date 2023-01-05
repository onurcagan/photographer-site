/* eslint-disable @next/next/no-img-element */
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { slideLeft, slideRight } from '../helper/sliderFunctions'

export function Carousel({ slides }: { slides: { image: string }[] }) {
  return (
    <div
      id="gallery"
      className="relative items-center justify-center py-16 text-center text-gray-300 md:flex md:flex-col md:min-h-screen md:px-4 sm:px-16"
    >
      <h1 className="text-4xl animate-wiggle">Gallery</h1>
      <div className="py-4" />

      <AiOutlineRightCircle
        className="absolute top-[50%] z-10 text-4xl md:text-5xl text-white -translate-y-[-50%] md:bg-gray-800/40 right-3 md:right-12 rounded-full p-1 cursor-pointer"
        onClick={() => slideRight(slides)}
      />
      <div
        id="slider"
        className="my-auto gap-2 md:gap-12 flex w-full h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] no-scrollbar"
      >
        <AiOutlineLeftCircle
          className="absolute top-[50%] z-10 text-4xl md:text-5xl text-white -translate-y-[-50%] md:bg-gray-800/40 left-3 md:left-12 rounded-full p-1 cursor-pointer"
          onClick={() => slideLeft(slides)}
        />
        {slides.map((slide, index) => {
          return (
            <img
              className=" w-[85%] md:w-[60%] p-2 duration-500 ease-in-out cursor-pointer hover:opacity-90 snap-center select-none"
              key={index}
              src={slide.image}
              alt=""
            />
          )
        })}
      </div>
    </div>
  )
}
