import Image from 'next/image'

const Portfolio = () => {
  return (
    <div className="max-w-[1440px] flex flex-col lg:min-h-screen items-center justify-center mx-auto pt-24 pb-0 sm:pb-4 md:pb-16 text-center text-slate-300">
      <h1 className="text-3xl animate-wiggle">Travel Photos</h1>
      <div className="pt-24" />
      <div className="grid grid-cols-none p-4 gap-[.6rem] sm:grid-cols-2 xl:grid-cols-3 sm:grid-rows-2 sm:gap-2">
        <div id="work">
          <Image
            src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            width="500"
            height="500"
            className="w-full h-full duration-300 hover:opacity-90 hover:animate-pulse"
          />
        </div>
        <div className="col-span-1 row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
            alt="/"
            width="500"
            height="500"
            className="w-full h-full duration-300 hover:opacity-90 hover:animate-pulse"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
            alt="/"
            width="500"
            height="500"
            className="w-full h-full duration-300 hover:opacity-90 hover:animate-pulse"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
            width="500"
            height="500"
            className="w-full h-full my-auto duration-300 hover:opacity-90 hover:animate-pulse"
          />
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1141&q=80"
            alt="/"
            width="500"
            height="500"
            className="w-full h-full duration-300 hover:opacity-90 hover:animate-pulse"
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio
